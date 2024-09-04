// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SpanEntryPoint extends pulumi.CustomResource {
    /**
     * Get an existing SpanEntryPoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpanEntryPointState, opts?: pulumi.CustomResourceOptions): SpanEntryPoint {
        return new SpanEntryPoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/spanEntryPoint:SpanEntryPoint';

    /**
     * Returns true if the given object is an instance of SpanEntryPoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpanEntryPoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpanEntryPoint.__pulumiType;
    }

    /**
     * Whether to create an entry point or not
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    public readonly insertAfter!: pulumi.Output<string>;
    /**
     * Matching strategies for the Span
     */
    public readonly matches!: pulumi.Output<outputs.SpanEntryPointMatches>;
    /**
     * The name of the rule
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a SpanEntryPoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpanEntryPointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpanEntryPointArgs | SpanEntryPointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpanEntryPointState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
            resourceInputs["matches"] = state ? state.matches : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as SpanEntryPointArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.matches === undefined) && !opts.urn) {
                throw new Error("Missing required property 'matches'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
            resourceInputs["matches"] = args ? args.matches : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpanEntryPoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpanEntryPoint resources.
 */
export interface SpanEntryPointState {
    /**
     * Whether to create an entry point or not
     */
    action?: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Matching strategies for the Span
     */
    matches?: pulumi.Input<inputs.SpanEntryPointMatches>;
    /**
     * The name of the rule
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SpanEntryPoint resource.
 */
export interface SpanEntryPointArgs {
    /**
     * Whether to create an entry point or not
     */
    action: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * Matching strategies for the Span
     */
    matches: pulumi.Input<inputs.SpanEntryPointMatches>;
    /**
     * The name of the rule
     */
    name?: pulumi.Input<string>;
}
