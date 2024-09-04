// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlsScheduledSql extends pulumi.CustomResource {
    /**
     * Get an existing SlsScheduledSql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlsScheduledSqlState, opts?: pulumi.CustomResourceOptions): SlsScheduledSql {
        return new SlsScheduledSql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/slsScheduledSql:SlsScheduledSql';

    /**
     * Returns true if the given object is an instance of SlsScheduledSql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlsScheduledSql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlsScheduledSql.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<outputs.SlsScheduledSqlSchedule>;
    public readonly scheduledSqlConfiguration!: pulumi.Output<outputs.SlsScheduledSqlScheduledSqlConfiguration>;
    public readonly scheduledSqlName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SlsScheduledSqlTimeouts | undefined>;

    /**
     * Create a SlsScheduledSql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlsScheduledSqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlsScheduledSqlArgs | SlsScheduledSqlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlsScheduledSqlState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["scheduledSqlConfiguration"] = state ? state.scheduledSqlConfiguration : undefined;
            resourceInputs["scheduledSqlName"] = state ? state.scheduledSqlName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SlsScheduledSqlArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            if ((!args || args.scheduledSqlConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduledSqlConfiguration'");
            }
            if ((!args || args.scheduledSqlName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduledSqlName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["scheduledSqlConfiguration"] = args ? args.scheduledSqlConfiguration : undefined;
            resourceInputs["scheduledSqlName"] = args ? args.scheduledSqlName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlsScheduledSql.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlsScheduledSql resources.
 */
export interface SlsScheduledSqlState {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.SlsScheduledSqlSchedule>;
    scheduledSqlConfiguration?: pulumi.Input<inputs.SlsScheduledSqlScheduledSqlConfiguration>;
    scheduledSqlName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SlsScheduledSqlTimeouts>;
}

/**
 * The set of arguments for constructing a SlsScheduledSql resource.
 */
export interface SlsScheduledSqlArgs {
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    project: pulumi.Input<string>;
    schedule: pulumi.Input<inputs.SlsScheduledSqlSchedule>;
    scheduledSqlConfiguration: pulumi.Input<inputs.SlsScheduledSqlScheduledSqlConfiguration>;
    scheduledSqlName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SlsScheduledSqlTimeouts>;
}
