// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GlobalacceleratorAccelerator extends pulumi.CustomResource {
    /**
     * Get an existing GlobalacceleratorAccelerator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlobalacceleratorAcceleratorState, opts?: pulumi.CustomResourceOptions): GlobalacceleratorAccelerator {
        return new GlobalacceleratorAccelerator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/globalacceleratorAccelerator:GlobalacceleratorAccelerator';

    /**
     * Returns true if the given object is an instance of GlobalacceleratorAccelerator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlobalacceleratorAccelerator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlobalacceleratorAccelerator.__pulumiType;
    }

    public readonly attributes!: pulumi.Output<outputs.GlobalacceleratorAcceleratorAttributes | undefined>;
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    public /*out*/ readonly dualStackDnsName!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly hostedZoneId!: pulumi.Output<string>;
    public readonly ipAddressType!: pulumi.Output<string | undefined>;
    public readonly ipAddresses!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly ipSets!: pulumi.Output<outputs.GlobalacceleratorAcceleratorIpSet[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.GlobalacceleratorAcceleratorTimeouts | undefined>;

    /**
     * Create a GlobalacceleratorAccelerator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GlobalacceleratorAcceleratorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlobalacceleratorAcceleratorArgs | GlobalacceleratorAcceleratorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlobalacceleratorAcceleratorState | undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["dualStackDnsName"] = state ? state.dualStackDnsName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["hostedZoneId"] = state ? state.hostedZoneId : undefined;
            resourceInputs["ipAddressType"] = state ? state.ipAddressType : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["ipSets"] = state ? state.ipSets : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GlobalacceleratorAcceleratorArgs | undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ipAddressType"] = args ? args.ipAddressType : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["dualStackDnsName"] = undefined /*out*/;
            resourceInputs["hostedZoneId"] = undefined /*out*/;
            resourceInputs["ipSets"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GlobalacceleratorAccelerator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GlobalacceleratorAccelerator resources.
 */
export interface GlobalacceleratorAcceleratorState {
    attributes?: pulumi.Input<inputs.GlobalacceleratorAcceleratorAttributes>;
    dnsName?: pulumi.Input<string>;
    dualStackDnsName?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    hostedZoneId?: pulumi.Input<string>;
    ipAddressType?: pulumi.Input<string>;
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    ipSets?: pulumi.Input<pulumi.Input<inputs.GlobalacceleratorAcceleratorIpSet>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GlobalacceleratorAcceleratorTimeouts>;
}

/**
 * The set of arguments for constructing a GlobalacceleratorAccelerator resource.
 */
export interface GlobalacceleratorAcceleratorArgs {
    attributes?: pulumi.Input<inputs.GlobalacceleratorAcceleratorAttributes>;
    enabled?: pulumi.Input<boolean>;
    ipAddressType?: pulumi.Input<string>;
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GlobalacceleratorAcceleratorTimeouts>;
}
