/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Team } from "./Team";
import { TeamCountArgs } from "./TeamCountArgs";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamFindUniqueArgs } from "./TeamFindUniqueArgs";
import { CreateTeamArgs } from "./CreateTeamArgs";
import { UpdateTeamArgs } from "./UpdateTeamArgs";
import { DeleteTeamArgs } from "./DeleteTeamArgs";
import { TeamService } from "../team.service";
@graphql.Resolver(() => Team)
export class TeamResolverBase {
  constructor(protected readonly service: TeamService) {}

  async _teamsMeta(
    @graphql.Args() args: TeamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Team])
  async teams(@graphql.Args() args: TeamFindManyArgs): Promise<Team[]> {
    return this.service.teams(args);
  }

  @graphql.Query(() => Team, { nullable: true })
  async team(@graphql.Args() args: TeamFindUniqueArgs): Promise<Team | null> {
    const result = await this.service.team(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Team)
  async createTeam(@graphql.Args() args: CreateTeamArgs): Promise<Team> {
    return await this.service.createTeam({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Team)
  async updateTeam(@graphql.Args() args: UpdateTeamArgs): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Team)
  async deleteTeam(@graphql.Args() args: DeleteTeamArgs): Promise<Team | null> {
    try {
      return await this.service.deleteTeam(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
