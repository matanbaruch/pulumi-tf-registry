// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpcPublicGatewayIp extends pulumi.CustomResource {
    /**
     * Get an existing VpcPublicGatewayIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPublicGatewayIpState, opts?: pulumi.CustomResourceOptions): VpcPublicGatewayIp {
        return new VpcPublicGatewayIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/vpcPublicGatewayIp:VpcPublicGatewayIp';

    /**
     * Returns true if the given object is an instance of VpcPublicGatewayIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPublicGatewayIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPublicGatewayIp.__pulumiType;
    }

    /**
     * the IP itself
     */
    public /*out*/ readonly address!: pulumi.Output<string>;
    /**
     * The date and time of the creation of the public gateway IP
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * reverse domain name for the IP address
     */
    public readonly reverse!: pulumi.Output<string>;
    /**
     * The tags associated with public gateway IP
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The date and time of the last update of the public gateway IP
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a VpcPublicGatewayIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VpcPublicGatewayIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPublicGatewayIpArgs | VpcPublicGatewayIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcPublicGatewayIpState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["reverse"] = state ? state.reverse : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as VpcPublicGatewayIpArgs | undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["reverse"] = args ? args.reverse : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["address"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcPublicGatewayIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcPublicGatewayIp resources.
 */
export interface VpcPublicGatewayIpState {
    /**
     * the IP itself
     */
    address?: pulumi.Input<string>;
    /**
     * The date and time of the creation of the public gateway IP
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * reverse domain name for the IP address
     */
    reverse?: pulumi.Input<string>;
    /**
     * The tags associated with public gateway IP
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The date and time of the last update of the public gateway IP
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcPublicGatewayIp resource.
 */
export interface VpcPublicGatewayIpArgs {
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * reverse domain name for the IP address
     */
    reverse?: pulumi.Input<string>;
    /**
     * The tags associated with public gateway IP
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}
