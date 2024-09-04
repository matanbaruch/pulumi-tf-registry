// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbSiteSlbDevVipServerVipServerV4 extends pulumi.CustomResource {
    /**
     * Get an existing GslbSiteSlbDevVipServerVipServerV4 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbSiteSlbDevVipServerVipServerV4State, opts?: pulumi.CustomResourceOptions): GslbSiteSlbDevVipServerVipServerV4 {
        return new GslbSiteSlbDevVipServerVipServerV4(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbSiteSlbDevVipServerVipServerV4:GslbSiteSlbDevVipServerVipServerV4';

    /**
     * Returns true if the given object is an instance of GslbSiteSlbDevVipServerVipServerV4.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbSiteSlbDevVipServerVipServerV4 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbSiteSlbDevVipServerVipServerV4.__pulumiType;
    }

    /**
     * DeviceName
     */
    public readonly deviceName!: pulumi.Output<string>;
    /**
     * Specify IP address
     */
    public readonly ipv4!: pulumi.Output<string>;
    public readonly samplingEnables!: pulumi.Output<outputs.GslbSiteSlbDevVipServerVipServerV4SamplingEnable[] | undefined>;
    /**
     * SiteName
     */
    public readonly siteName!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbSiteSlbDevVipServerVipServerV4 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GslbSiteSlbDevVipServerVipServerV4Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbSiteSlbDevVipServerVipServerV4Args | GslbSiteSlbDevVipServerVipServerV4State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbSiteSlbDevVipServerVipServerV4State | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["ipv4"] = state ? state.ipv4 : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["siteName"] = state ? state.siteName : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbSiteSlbDevVipServerVipServerV4Args | undefined;
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.ipv4 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["ipv4"] = args ? args.ipv4 : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbSiteSlbDevVipServerVipServerV4.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbSiteSlbDevVipServerVipServerV4 resources.
 */
export interface GslbSiteSlbDevVipServerVipServerV4State {
    /**
     * DeviceName
     */
    deviceName?: pulumi.Input<string>;
    /**
     * Specify IP address
     */
    ipv4?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.GslbSiteSlbDevVipServerVipServerV4SamplingEnable>[]>;
    /**
     * SiteName
     */
    siteName?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbSiteSlbDevVipServerVipServerV4 resource.
 */
export interface GslbSiteSlbDevVipServerVipServerV4Args {
    /**
     * DeviceName
     */
    deviceName: pulumi.Input<string>;
    /**
     * Specify IP address
     */
    ipv4: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.GslbSiteSlbDevVipServerVipServerV4SamplingEnable>[]>;
    /**
     * SiteName
     */
    siteName: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
