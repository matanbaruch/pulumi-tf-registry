// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CommonBandwidthPackage extends pulumi.CustomResource {
    /**
     * Get an existing CommonBandwidthPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CommonBandwidthPackageState, opts?: pulumi.CustomResourceOptions): CommonBandwidthPackage {
        return new CommonBandwidthPackage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/commonBandwidthPackage:CommonBandwidthPackage';

    /**
     * Returns true if the given object is an instance of CommonBandwidthPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommonBandwidthPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommonBandwidthPackage.__pulumiType;
    }

    public readonly bandwidth!: pulumi.Output<string>;
    public readonly bandwidthPackageName!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly deletionProtection!: pulumi.Output<boolean | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly force!: pulumi.Output<string | undefined>;
    public readonly internetChargeType!: pulumi.Output<string | undefined>;
    public readonly isp!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly paymentType!: pulumi.Output<string>;
    public readonly ratio!: pulumi.Output<number>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly securityProtectionTypes!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CommonBandwidthPackageTimeouts | undefined>;
    public readonly zone!: pulumi.Output<string | undefined>;

    /**
     * Create a CommonBandwidthPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommonBandwidthPackageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CommonBandwidthPackageArgs | CommonBandwidthPackageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CommonBandwidthPackageState | undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["bandwidthPackageName"] = state ? state.bandwidthPackageName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["internetChargeType"] = state ? state.internetChargeType : undefined;
            resourceInputs["isp"] = state ? state.isp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["ratio"] = state ? state.ratio : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["securityProtectionTypes"] = state ? state.securityProtectionTypes : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as CommonBandwidthPackageArgs | undefined;
            if ((!args || args.bandwidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidth'");
            }
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["bandwidthPackageName"] = args ? args.bandwidthPackageName : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["internetChargeType"] = args ? args.internetChargeType : undefined;
            resourceInputs["isp"] = args ? args.isp : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ratio"] = args ? args.ratio : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["securityProtectionTypes"] = args ? args.securityProtectionTypes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["paymentType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CommonBandwidthPackage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CommonBandwidthPackage resources.
 */
export interface CommonBandwidthPackageState {
    bandwidth?: pulumi.Input<string>;
    bandwidthPackageName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    force?: pulumi.Input<string>;
    internetChargeType?: pulumi.Input<string>;
    isp?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    ratio?: pulumi.Input<number>;
    resourceGroupId?: pulumi.Input<string>;
    securityProtectionTypes?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CommonBandwidthPackageTimeouts>;
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CommonBandwidthPackage resource.
 */
export interface CommonBandwidthPackageArgs {
    bandwidth: pulumi.Input<string>;
    bandwidthPackageName?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    force?: pulumi.Input<string>;
    internetChargeType?: pulumi.Input<string>;
    isp?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    ratio?: pulumi.Input<number>;
    resourceGroupId?: pulumi.Input<string>;
    securityProtectionTypes?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CommonBandwidthPackageTimeouts>;
    zone?: pulumi.Input<string>;
}
