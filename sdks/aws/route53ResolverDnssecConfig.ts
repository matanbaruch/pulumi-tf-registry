// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Route53ResolverDnssecConfig extends pulumi.CustomResource {
    /**
     * Get an existing Route53ResolverDnssecConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Route53ResolverDnssecConfigState, opts?: pulumi.CustomResourceOptions): Route53ResolverDnssecConfig {
        return new Route53ResolverDnssecConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/route53ResolverDnssecConfig:Route53ResolverDnssecConfig';

    /**
     * Returns true if the given object is an instance of Route53ResolverDnssecConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route53ResolverDnssecConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route53ResolverDnssecConfig.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    public readonly resourceId!: pulumi.Output<string>;
    public /*out*/ readonly validationStatus!: pulumi.Output<string>;

    /**
     * Create a Route53ResolverDnssecConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Route53ResolverDnssecConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Route53ResolverDnssecConfigArgs | Route53ResolverDnssecConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Route53ResolverDnssecConfigState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["validationStatus"] = state ? state.validationStatus : undefined;
        } else {
            const args = argsOrState as Route53ResolverDnssecConfigArgs | undefined;
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["validationStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Route53ResolverDnssecConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Route53ResolverDnssecConfig resources.
 */
export interface Route53ResolverDnssecConfigState {
    arn?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    resourceId?: pulumi.Input<string>;
    validationStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Route53ResolverDnssecConfig resource.
 */
export interface Route53ResolverDnssecConfigArgs {
    resourceId: pulumi.Input<string>;
}
