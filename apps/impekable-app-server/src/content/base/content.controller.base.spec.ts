import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ContentController } from "../content.controller";
import { ContentService } from "../content.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contentDetail: "exampleContentDetail",
  createdAt: new Date(),
  creator: "exampleCreator",
  description: "exampleDescription",
  id: "exampleId",
  publicationDate: new Date(),
  title: "exampleTitle",
  updateDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contentDetail: "exampleContentDetail",
  createdAt: new Date(),
  creator: "exampleCreator",
  description: "exampleDescription",
  id: "exampleId",
  publicationDate: new Date(),
  title: "exampleTitle",
  updateDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contentDetail: "exampleContentDetail",
    createdAt: new Date(),
    creator: "exampleCreator",
    description: "exampleDescription",
    id: "exampleId",
    publicationDate: new Date(),
    title: "exampleTitle",
    updateDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contentDetail: "exampleContentDetail",
  createdAt: new Date(),
  creator: "exampleCreator",
  description: "exampleDescription",
  id: "exampleId",
  publicationDate: new Date(),
  title: "exampleTitle",
  updateDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createContent() {
    return CREATE_RESULT;
  },
  contents: () => FIND_MANY_RESULT,
  content: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Content", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContentService,
          useValue: service,
        },
      ],
      controllers: [ContentController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contents", async () => {
    await request(app.getHttpServer())
      .post("/contents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publicationDate: CREATE_RESULT.publicationDate.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contents", async () => {
    await request(app.getHttpServer())
      .get("/contents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          publicationDate: FIND_MANY_RESULT[0].publicationDate.toISOString(),
          updateDate: FIND_MANY_RESULT[0].updateDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        publicationDate: FIND_ONE_RESULT.publicationDate.toISOString(),
        updateDate: FIND_ONE_RESULT.updateDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publicationDate: CREATE_RESULT.publicationDate.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contents")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
