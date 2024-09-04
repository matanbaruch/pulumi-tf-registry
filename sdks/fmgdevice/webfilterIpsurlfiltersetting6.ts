// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebfilterIpsurlfiltersetting6 extends pulumi.CustomResource {
    /**
     * Get an existing WebfilterIpsurlfiltersetting6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebfilterIpsurlfiltersetting6State, opts?: pulumi.CustomResourceOptions): WebfilterIpsurlfiltersetting6 {
        return new WebfilterIpsurlfiltersetting6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/webfilterIpsurlfiltersetting6:WebfilterIpsurlfiltersetting6';

    /**
     * Returns true if the given object is an instance of WebfilterIpsurlfiltersetting6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebfilterIpsurlfiltersetting6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebfilterIpsurlfiltersetting6.__pulumiType;
    }

    public readonly device!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly distance!: pulumi.Output<number>;
    public readonly gateway6!: pulumi.Output<string>;
    public readonly geoFilter!: pulumi.Output<string | undefined>;

    /**
     * Create a WebfilterIpsurlfiltersetting6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebfilterIpsurlfiltersetting6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebfilterIpsurlfiltersetting6Args | WebfilterIpsurlfiltersetting6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebfilterIpsurlfiltersetting6State | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["gateway6"] = state ? state.gateway6 : undefined;
            resourceInputs["geoFilter"] = state ? state.geoFilter : undefined;
        } else {
            const args = argsOrState as WebfilterIpsurlfiltersetting6Args | undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["gateway6"] = args ? args.gateway6 : undefined;
            resourceInputs["geoFilter"] = args ? args.geoFilter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebfilterIpsurlfiltersetting6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebfilterIpsurlfiltersetting6 resources.
 */
export interface WebfilterIpsurlfiltersetting6State {
    device?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    distance?: pulumi.Input<number>;
    gateway6?: pulumi.Input<string>;
    geoFilter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebfilterIpsurlfiltersetting6 resource.
 */
export interface WebfilterIpsurlfiltersetting6Args {
    device?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    distance?: pulumi.Input<number>;
    gateway6?: pulumi.Input<string>;
    geoFilter?: pulumi.Input<string>;
}
