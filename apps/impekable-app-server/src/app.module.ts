import { Module } from "@nestjs/common";
import { TeamModule } from "./team/team.module";
import { OfficeModule } from "./office/office.module";
import { PropertyModule } from "./property/property.module";
import { ServiceTypeModule } from "./serviceType/serviceType.module";
import { RatingModule } from "./rating/rating.module";
import { TransactionModule } from "./transaction/transaction.module";
import { ContentModule } from "./content/content.module";
import { ServiceModule } from "./service/service.module";
import { ReportModule } from "./report/report.module";
import { BookingModule } from "./booking/booking.module";
import { RequestModule } from "./request/request.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TeamModule,
    OfficeModule,
    PropertyModule,
    ServiceTypeModule,
    RatingModule,
    TransactionModule,
    ContentModule,
    ServiceModule,
    ReportModule,
    BookingModule,
    RequestModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
