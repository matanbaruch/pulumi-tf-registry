// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Vnet extends pulumi.CustomResource {
    /**
     * Get an existing Vnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VnetState, opts?: pulumi.CustomResourceOptions): Vnet {
        return new Vnet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netris:index/vnet:Vnet';

    /**
     * Returns true if the given object is an instance of Vnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vnet.__pulumiType;
    }

    /**
     * The name of the vnet
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Block of per site vnet configuration
     */
    public readonly sites!: pulumi.Output<outputs.VnetSite[]>;
    /**
     * V-Net state. Allowed values: `active` or `disabled`. Default value is `active`
     */
    public readonly state!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<string[]>;
    /**
     * ID of tenant. Users of this tenant will be permitted to edit this unit.
     */
    public readonly tenantid!: pulumi.Output<number>;
    /**
     * VLAN ID
     */
    public readonly vlanid!: pulumi.Output<string | undefined>;
    /**
     * ID of VPC. If not specified, the V-Net will be created in the VPC marked as a default.
     */
    public readonly vpcid!: pulumi.Output<number | undefined>;

    /**
     * Create a Vnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VnetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VnetArgs | VnetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VnetState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sites"] = state ? state.sites : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenantid"] = state ? state.tenantid : undefined;
            resourceInputs["vlanid"] = state ? state.vlanid : undefined;
            resourceInputs["vpcid"] = state ? state.vpcid : undefined;
        } else {
            const args = argsOrState as VnetArgs | undefined;
            if ((!args || args.sites === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sites'");
            }
            if ((!args || args.tenantid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantid'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sites"] = args ? args.sites : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantid"] = args ? args.tenantid : undefined;
            resourceInputs["vlanid"] = args ? args.vlanid : undefined;
            resourceInputs["vpcid"] = args ? args.vpcid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vnet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vnet resources.
 */
export interface VnetState {
    /**
     * The name of the vnet
     */
    name?: pulumi.Input<string>;
    /**
     * Block of per site vnet configuration
     */
    sites?: pulumi.Input<pulumi.Input<inputs.VnetSite>[]>;
    /**
     * V-Net state. Allowed values: `active` or `disabled`. Default value is `active`
     */
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of tenant. Users of this tenant will be permitted to edit this unit.
     */
    tenantid?: pulumi.Input<number>;
    /**
     * VLAN ID
     */
    vlanid?: pulumi.Input<string>;
    /**
     * ID of VPC. If not specified, the V-Net will be created in the VPC marked as a default.
     */
    vpcid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Vnet resource.
 */
export interface VnetArgs {
    /**
     * The name of the vnet
     */
    name?: pulumi.Input<string>;
    /**
     * Block of per site vnet configuration
     */
    sites: pulumi.Input<pulumi.Input<inputs.VnetSite>[]>;
    /**
     * V-Net state. Allowed values: `active` or `disabled`. Default value is `active`
     */
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of tenant. Users of this tenant will be permitted to edit this unit.
     */
    tenantid: pulumi.Input<number>;
    /**
     * VLAN ID
     */
    vlanid?: pulumi.Input<string>;
    /**
     * ID of VPC. If not specified, the V-Net will be created in the VPC marked as a default.
     */
    vpcid?: pulumi.Input<number>;
}
