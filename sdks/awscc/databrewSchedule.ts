// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabrewSchedule extends pulumi.CustomResource {
    /**
     * Get an existing DatabrewSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabrewScheduleState, opts?: pulumi.CustomResourceOptions): DatabrewSchedule {
        return new DatabrewSchedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/databrewSchedule:DatabrewSchedule';

    /**
     * Returns true if the given object is an instance of DatabrewSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabrewSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabrewSchedule.__pulumiType;
    }

    /**
     * Schedule cron
     */
    public readonly cronExpression!: pulumi.Output<string>;
    public readonly jobNames!: pulumi.Output<string[]>;
    /**
     * Schedule Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.DatabrewScheduleTag[]>;

    /**
     * Create a DatabrewSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabrewScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabrewScheduleArgs | DatabrewScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabrewScheduleState | undefined;
            resourceInputs["cronExpression"] = state ? state.cronExpression : undefined;
            resourceInputs["jobNames"] = state ? state.jobNames : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DatabrewScheduleArgs | undefined;
            if ((!args || args.cronExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cronExpression'");
            }
            resourceInputs["cronExpression"] = args ? args.cronExpression : undefined;
            resourceInputs["jobNames"] = args ? args.jobNames : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabrewSchedule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabrewSchedule resources.
 */
export interface DatabrewScheduleState {
    /**
     * Schedule cron
     */
    cronExpression?: pulumi.Input<string>;
    jobNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Schedule Name
     */
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.DatabrewScheduleTag>[]>;
}

/**
 * The set of arguments for constructing a DatabrewSchedule resource.
 */
export interface DatabrewScheduleArgs {
    /**
     * Schedule cron
     */
    cronExpression: pulumi.Input<string>;
    jobNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Schedule Name
     */
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.DatabrewScheduleTag>[]>;
}
