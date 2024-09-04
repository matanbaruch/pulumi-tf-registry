// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkingRouterV2 extends pulumi.CustomResource {
    /**
     * Get an existing NetworkingRouterV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkingRouterV2State, opts?: pulumi.CustomResourceOptions): NetworkingRouterV2 {
        return new NetworkingRouterV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/networkingRouterV2:NetworkingRouterV2';

    /**
     * Returns true if the given object is an instance of NetworkingRouterV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkingRouterV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkingRouterV2.__pulumiType;
    }

    public readonly adminStateUp!: pulumi.Output<boolean>;
    public /*out*/ readonly allTags!: pulumi.Output<string[]>;
    public readonly availabilityZoneHints!: pulumi.Output<string[]>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly distributed!: pulumi.Output<boolean>;
    public readonly enableSnat!: pulumi.Output<boolean>;
    public readonly externalFixedIps!: pulumi.Output<outputs.NetworkingRouterV2ExternalFixedIp[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly externalGateway!: pulumi.Output<string>;
    public readonly externalNetworkId!: pulumi.Output<string>;
    public readonly externalSubnetIds!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkingRouterV2Timeouts | undefined>;
    public readonly valueSpecs!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly vendorOptions!: pulumi.Output<outputs.NetworkingRouterV2VendorOptions | undefined>;

    /**
     * Create a NetworkingRouterV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkingRouterV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkingRouterV2Args | NetworkingRouterV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkingRouterV2State | undefined;
            resourceInputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            resourceInputs["allTags"] = state ? state.allTags : undefined;
            resourceInputs["availabilityZoneHints"] = state ? state.availabilityZoneHints : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["distributed"] = state ? state.distributed : undefined;
            resourceInputs["enableSnat"] = state ? state.enableSnat : undefined;
            resourceInputs["externalFixedIps"] = state ? state.externalFixedIps : undefined;
            resourceInputs["externalGateway"] = state ? state.externalGateway : undefined;
            resourceInputs["externalNetworkId"] = state ? state.externalNetworkId : undefined;
            resourceInputs["externalSubnetIds"] = state ? state.externalSubnetIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["valueSpecs"] = state ? state.valueSpecs : undefined;
            resourceInputs["vendorOptions"] = state ? state.vendorOptions : undefined;
        } else {
            const args = argsOrState as NetworkingRouterV2Args | undefined;
            resourceInputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            resourceInputs["availabilityZoneHints"] = args ? args.availabilityZoneHints : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["distributed"] = args ? args.distributed : undefined;
            resourceInputs["enableSnat"] = args ? args.enableSnat : undefined;
            resourceInputs["externalFixedIps"] = args ? args.externalFixedIps : undefined;
            resourceInputs["externalGateway"] = args ? args.externalGateway : undefined;
            resourceInputs["externalNetworkId"] = args ? args.externalNetworkId : undefined;
            resourceInputs["externalSubnetIds"] = args ? args.externalSubnetIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["valueSpecs"] = args ? args.valueSpecs : undefined;
            resourceInputs["vendorOptions"] = args ? args.vendorOptions : undefined;
            resourceInputs["allTags"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkingRouterV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkingRouterV2 resources.
 */
export interface NetworkingRouterV2State {
    adminStateUp?: pulumi.Input<boolean>;
    allTags?: pulumi.Input<pulumi.Input<string>[]>;
    availabilityZoneHints?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    distributed?: pulumi.Input<boolean>;
    enableSnat?: pulumi.Input<boolean>;
    externalFixedIps?: pulumi.Input<pulumi.Input<inputs.NetworkingRouterV2ExternalFixedIp>[]>;
    /**
     * @deprecated Deprecated
     */
    externalGateway?: pulumi.Input<string>;
    externalNetworkId?: pulumi.Input<string>;
    externalSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkingRouterV2Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vendorOptions?: pulumi.Input<inputs.NetworkingRouterV2VendorOptions>;
}

/**
 * The set of arguments for constructing a NetworkingRouterV2 resource.
 */
export interface NetworkingRouterV2Args {
    adminStateUp?: pulumi.Input<boolean>;
    availabilityZoneHints?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    distributed?: pulumi.Input<boolean>;
    enableSnat?: pulumi.Input<boolean>;
    externalFixedIps?: pulumi.Input<pulumi.Input<inputs.NetworkingRouterV2ExternalFixedIp>[]>;
    /**
     * @deprecated Deprecated
     */
    externalGateway?: pulumi.Input<string>;
    externalNetworkId?: pulumi.Input<string>;
    externalSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkingRouterV2Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vendorOptions?: pulumi.Input<inputs.NetworkingRouterV2VendorOptions>;
}
