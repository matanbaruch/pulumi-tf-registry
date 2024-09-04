// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TestSuiteTeam extends pulumi.CustomResource {
    /**
     * Get an existing TestSuiteTeam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TestSuiteTeamState, opts?: pulumi.CustomResourceOptions): TestSuiteTeam {
        return new TestSuiteTeam(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'buildkite:index/testSuiteTeam:TestSuiteTeam';

    /**
     * Returns true if the given object is an instance of TestSuiteTeam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TestSuiteTeam {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TestSuiteTeam.__pulumiType;
    }

    /**
     * The access level the team has on the test suite. Either `READ_ONLY` or `MANAGE_AND_READ`.
     */
    public readonly accessLevel!: pulumi.Output<string>;
    /**
     * The GraphQL ID of the team.
     */
    public readonly teamId!: pulumi.Output<string>;
    /**
     * The GraphQL ID of the test suite.
     */
    public readonly testSuiteId!: pulumi.Output<string>;
    /**
     * The UUID of the test suite-team relationship.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

    /**
     * Create a TestSuiteTeam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TestSuiteTeamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TestSuiteTeamArgs | TestSuiteTeamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TestSuiteTeamState | undefined;
            resourceInputs["accessLevel"] = state ? state.accessLevel : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["testSuiteId"] = state ? state.testSuiteId : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as TestSuiteTeamArgs | undefined;
            if ((!args || args.accessLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessLevel'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            if ((!args || args.testSuiteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testSuiteId'");
            }
            resourceInputs["accessLevel"] = args ? args.accessLevel : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["testSuiteId"] = args ? args.testSuiteId : undefined;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TestSuiteTeam.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TestSuiteTeam resources.
 */
export interface TestSuiteTeamState {
    /**
     * The access level the team has on the test suite. Either `READ_ONLY` or `MANAGE_AND_READ`.
     */
    accessLevel?: pulumi.Input<string>;
    /**
     * The GraphQL ID of the team.
     */
    teamId?: pulumi.Input<string>;
    /**
     * The GraphQL ID of the test suite.
     */
    testSuiteId?: pulumi.Input<string>;
    /**
     * The UUID of the test suite-team relationship.
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TestSuiteTeam resource.
 */
export interface TestSuiteTeamArgs {
    /**
     * The access level the team has on the test suite. Either `READ_ONLY` or `MANAGE_AND_READ`.
     */
    accessLevel: pulumi.Input<string>;
    /**
     * The GraphQL ID of the team.
     */
    teamId: pulumi.Input<string>;
    /**
     * The GraphQL ID of the test suite.
     */
    testSuiteId: pulumi.Input<string>;
}
