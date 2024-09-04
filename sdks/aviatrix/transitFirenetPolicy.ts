// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TransitFirenetPolicy extends pulumi.CustomResource {
    /**
     * Get an existing TransitFirenetPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransitFirenetPolicyState, opts?: pulumi.CustomResourceOptions): TransitFirenetPolicy {
        return new TransitFirenetPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/transitFirenetPolicy:TransitFirenetPolicy';

    /**
     * Returns true if the given object is an instance of TransitFirenetPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransitFirenetPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransitFirenetPolicy.__pulumiType;
    }

    /**
     * Name of the resource to be added to transit firenet policy.
     */
    public readonly inspectedResourceName!: pulumi.Output<string>;
    /**
     * Name of the transit firenet gateway.
     */
    public readonly transitFirenetGatewayName!: pulumi.Output<string>;

    /**
     * Create a TransitFirenetPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransitFirenetPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TransitFirenetPolicyArgs | TransitFirenetPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TransitFirenetPolicyState | undefined;
            resourceInputs["inspectedResourceName"] = state ? state.inspectedResourceName : undefined;
            resourceInputs["transitFirenetGatewayName"] = state ? state.transitFirenetGatewayName : undefined;
        } else {
            const args = argsOrState as TransitFirenetPolicyArgs | undefined;
            if ((!args || args.inspectedResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inspectedResourceName'");
            }
            if ((!args || args.transitFirenetGatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitFirenetGatewayName'");
            }
            resourceInputs["inspectedResourceName"] = args ? args.inspectedResourceName : undefined;
            resourceInputs["transitFirenetGatewayName"] = args ? args.transitFirenetGatewayName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TransitFirenetPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TransitFirenetPolicy resources.
 */
export interface TransitFirenetPolicyState {
    /**
     * Name of the resource to be added to transit firenet policy.
     */
    inspectedResourceName?: pulumi.Input<string>;
    /**
     * Name of the transit firenet gateway.
     */
    transitFirenetGatewayName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TransitFirenetPolicy resource.
 */
export interface TransitFirenetPolicyArgs {
    /**
     * Name of the resource to be added to transit firenet policy.
     */
    inspectedResourceName: pulumi.Input<string>;
    /**
     * Name of the transit firenet gateway.
     */
    transitFirenetGatewayName: pulumi.Input<string>;
}
