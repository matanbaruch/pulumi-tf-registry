// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CwpLicenseOrder extends pulumi.CustomResource {
    /**
     * Get an existing CwpLicenseOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CwpLicenseOrderState, opts?: pulumi.CustomResourceOptions): CwpLicenseOrder {
        return new CwpLicenseOrder(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cwpLicenseOrder:CwpLicenseOrder';

    /**
     * Returns true if the given object is an instance of CwpLicenseOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CwpLicenseOrder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CwpLicenseOrder.__pulumiType;
    }

    /**
     * Resource alias.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * license id.
     */
    public /*out*/ readonly licenseId!: pulumi.Output<number>;
    /**
     * License quantity, Quantity to be purchased.Default is 1.
     */
    public readonly licenseNum!: pulumi.Output<number | undefined>;
    /**
     * LicenseType, 0 CWP Pro - Pay as you go, 1 CWP Pro - Monthly subscription, 2 CWP Ultimate - Monthly subscription. Default
     * is 0.
     */
    public readonly licenseType!: pulumi.Output<number | undefined>;
    /**
     * Project ID. Default is 0.
     */
    public readonly projectId!: pulumi.Output<number | undefined>;
    /**
     * Purchase order region, only 1 Guangzhou, 9 Singapore is supported here. Guangzhou is recommended. Singapore is
     * whitelisted. Default is 1.
     */
    public readonly regionId!: pulumi.Output<number | undefined>;
    /**
     * resource id.
     */
    public /*out*/ readonly resourceId!: pulumi.Output<string>;
    /**
     * Tags of the license order.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a CwpLicenseOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CwpLicenseOrderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CwpLicenseOrderArgs | CwpLicenseOrderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CwpLicenseOrderState | undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["licenseId"] = state ? state.licenseId : undefined;
            resourceInputs["licenseNum"] = state ? state.licenseNum : undefined;
            resourceInputs["licenseType"] = state ? state.licenseType : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as CwpLicenseOrderArgs | undefined;
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["licenseNum"] = args ? args.licenseNum : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["licenseId"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CwpLicenseOrder.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CwpLicenseOrder resources.
 */
export interface CwpLicenseOrderState {
    /**
     * Resource alias.
     */
    alias?: pulumi.Input<string>;
    /**
     * license id.
     */
    licenseId?: pulumi.Input<number>;
    /**
     * License quantity, Quantity to be purchased.Default is 1.
     */
    licenseNum?: pulumi.Input<number>;
    /**
     * LicenseType, 0 CWP Pro - Pay as you go, 1 CWP Pro - Monthly subscription, 2 CWP Ultimate - Monthly subscription. Default
     * is 0.
     */
    licenseType?: pulumi.Input<number>;
    /**
     * Project ID. Default is 0.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Purchase order region, only 1 Guangzhou, 9 Singapore is supported here. Guangzhou is recommended. Singapore is
     * whitelisted. Default is 1.
     */
    regionId?: pulumi.Input<number>;
    /**
     * resource id.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Tags of the license order.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CwpLicenseOrder resource.
 */
export interface CwpLicenseOrderArgs {
    /**
     * Resource alias.
     */
    alias?: pulumi.Input<string>;
    /**
     * License quantity, Quantity to be purchased.Default is 1.
     */
    licenseNum?: pulumi.Input<number>;
    /**
     * LicenseType, 0 CWP Pro - Pay as you go, 1 CWP Pro - Monthly subscription, 2 CWP Ultimate - Monthly subscription. Default
     * is 0.
     */
    licenseType?: pulumi.Input<number>;
    /**
     * Project ID. Default is 0.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Purchase order region, only 1 Guangzhou, 9 Singapore is supported here. Guangzhou is recommended. Singapore is
     * whitelisted. Default is 1.
     */
    regionId?: pulumi.Input<number>;
    /**
     * Tags of the license order.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
