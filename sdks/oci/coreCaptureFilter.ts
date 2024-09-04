// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreCaptureFilter extends pulumi.CustomResource {
    /**
     * Get an existing CoreCaptureFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreCaptureFilterState, opts?: pulumi.CustomResourceOptions): CoreCaptureFilter {
        return new CoreCaptureFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreCaptureFilter:CoreCaptureFilter';

    /**
     * Returns true if the given object is an instance of CoreCaptureFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreCaptureFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreCaptureFilter.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly filterType!: pulumi.Output<string>;
    public readonly flowLogCaptureFilterRules!: pulumi.Output<outputs.CoreCaptureFilterFlowLogCaptureFilterRule[] | undefined>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreCaptureFilterTimeouts | undefined>;
    public readonly vtapCaptureFilterRules!: pulumi.Output<outputs.CoreCaptureFilterVtapCaptureFilterRule[] | undefined>;

    /**
     * Create a CoreCaptureFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreCaptureFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreCaptureFilterArgs | CoreCaptureFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreCaptureFilterState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["filterType"] = state ? state.filterType : undefined;
            resourceInputs["flowLogCaptureFilterRules"] = state ? state.flowLogCaptureFilterRules : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vtapCaptureFilterRules"] = state ? state.vtapCaptureFilterRules : undefined;
        } else {
            const args = argsOrState as CoreCaptureFilterArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.filterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterType'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["flowLogCaptureFilterRules"] = args ? args.flowLogCaptureFilterRules : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vtapCaptureFilterRules"] = args ? args.vtapCaptureFilterRules : undefined;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreCaptureFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreCaptureFilter resources.
 */
export interface CoreCaptureFilterState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    flowLogCaptureFilterRules?: pulumi.Input<pulumi.Input<inputs.CoreCaptureFilterFlowLogCaptureFilterRule>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreCaptureFilterTimeouts>;
    vtapCaptureFilterRules?: pulumi.Input<pulumi.Input<inputs.CoreCaptureFilterVtapCaptureFilterRule>[]>;
}

/**
 * The set of arguments for constructing a CoreCaptureFilter resource.
 */
export interface CoreCaptureFilterArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    filterType: pulumi.Input<string>;
    flowLogCaptureFilterRules?: pulumi.Input<pulumi.Input<inputs.CoreCaptureFilterFlowLogCaptureFilterRule>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CoreCaptureFilterTimeouts>;
    vtapCaptureFilterRules?: pulumi.Input<pulumi.Input<inputs.CoreCaptureFilterVtapCaptureFilterRule>[]>;
}
