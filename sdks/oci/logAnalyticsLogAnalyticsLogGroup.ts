// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogAnalyticsLogAnalyticsLogGroup extends pulumi.CustomResource {
    /**
     * Get an existing LogAnalyticsLogAnalyticsLogGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogAnalyticsLogAnalyticsLogGroupState, opts?: pulumi.CustomResourceOptions): LogAnalyticsLogAnalyticsLogGroup {
        return new LogAnalyticsLogAnalyticsLogGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/logAnalyticsLogAnalyticsLogGroup:LogAnalyticsLogAnalyticsLogGroup';

    /**
     * Returns true if the given object is an instance of LogAnalyticsLogAnalyticsLogGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogAnalyticsLogAnalyticsLogGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogAnalyticsLogAnalyticsLogGroup.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly namespace!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LogAnalyticsLogAnalyticsLogGroupTimeouts | undefined>;

    /**
     * Create a LogAnalyticsLogAnalyticsLogGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogAnalyticsLogAnalyticsLogGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogAnalyticsLogAnalyticsLogGroupArgs | LogAnalyticsLogAnalyticsLogGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogAnalyticsLogAnalyticsLogGroupState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LogAnalyticsLogAnalyticsLogGroupArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogAnalyticsLogAnalyticsLogGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogAnalyticsLogAnalyticsLogGroup resources.
 */
export interface LogAnalyticsLogAnalyticsLogGroupState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    namespace?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsLogAnalyticsLogGroupTimeouts>;
}

/**
 * The set of arguments for constructing a LogAnalyticsLogAnalyticsLogGroup resource.
 */
export interface LogAnalyticsLogAnalyticsLogGroupArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    namespace: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsLogAnalyticsLogGroupTimeouts>;
}
