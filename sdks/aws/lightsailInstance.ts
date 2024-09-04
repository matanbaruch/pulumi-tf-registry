// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LightsailInstance extends pulumi.CustomResource {
    /**
     * Get an existing LightsailInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LightsailInstanceState, opts?: pulumi.CustomResourceOptions): LightsailInstance {
        return new LightsailInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/lightsailInstance:LightsailInstance';

    /**
     * Returns true if the given object is an instance of LightsailInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LightsailInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LightsailInstance.__pulumiType;
    }

    public readonly addOn!: pulumi.Output<outputs.LightsailInstanceAddOn | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly availabilityZone!: pulumi.Output<string>;
    public readonly blueprintId!: pulumi.Output<string>;
    public readonly bundleId!: pulumi.Output<string>;
    public /*out*/ readonly cpuCount!: pulumi.Output<number>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly ipAddressType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly ipv6Addresses!: pulumi.Output<string[]>;
    public /*out*/ readonly isStaticIp!: pulumi.Output<boolean>;
    public readonly keyPairName!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateIpAddress!: pulumi.Output<string>;
    public /*out*/ readonly publicIpAddress!: pulumi.Output<string>;
    public /*out*/ readonly ramSize!: pulumi.Output<number>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly userData!: pulumi.Output<string | undefined>;
    public /*out*/ readonly username!: pulumi.Output<string>;

    /**
     * Create a LightsailInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LightsailInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LightsailInstanceArgs | LightsailInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LightsailInstanceState | undefined;
            resourceInputs["addOn"] = state ? state.addOn : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["blueprintId"] = state ? state.blueprintId : undefined;
            resourceInputs["bundleId"] = state ? state.bundleId : undefined;
            resourceInputs["cpuCount"] = state ? state.cpuCount : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["ipAddressType"] = state ? state.ipAddressType : undefined;
            resourceInputs["ipv6Addresses"] = state ? state.ipv6Addresses : undefined;
            resourceInputs["isStaticIp"] = state ? state.isStaticIp : undefined;
            resourceInputs["keyPairName"] = state ? state.keyPairName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateIpAddress"] = state ? state.privateIpAddress : undefined;
            resourceInputs["publicIpAddress"] = state ? state.publicIpAddress : undefined;
            resourceInputs["ramSize"] = state ? state.ramSize : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as LightsailInstanceArgs | undefined;
            if ((!args || args.availabilityZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZone'");
            }
            if ((!args || args.blueprintId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintId'");
            }
            if ((!args || args.bundleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bundleId'");
            }
            resourceInputs["addOn"] = args ? args.addOn : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["blueprintId"] = args ? args.blueprintId : undefined;
            resourceInputs["bundleId"] = args ? args.bundleId : undefined;
            resourceInputs["ipAddressType"] = args ? args.ipAddressType : undefined;
            resourceInputs["keyPairName"] = args ? args.keyPairName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["cpuCount"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["ipv6Addresses"] = undefined /*out*/;
            resourceInputs["isStaticIp"] = undefined /*out*/;
            resourceInputs["privateIpAddress"] = undefined /*out*/;
            resourceInputs["publicIpAddress"] = undefined /*out*/;
            resourceInputs["ramSize"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LightsailInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LightsailInstance resources.
 */
export interface LightsailInstanceState {
    addOn?: pulumi.Input<inputs.LightsailInstanceAddOn>;
    arn?: pulumi.Input<string>;
    availabilityZone?: pulumi.Input<string>;
    blueprintId?: pulumi.Input<string>;
    bundleId?: pulumi.Input<string>;
    cpuCount?: pulumi.Input<number>;
    createdAt?: pulumi.Input<string>;
    ipAddressType?: pulumi.Input<string>;
    ipv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    isStaticIp?: pulumi.Input<boolean>;
    keyPairName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    publicIpAddress?: pulumi.Input<string>;
    ramSize?: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    userData?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LightsailInstance resource.
 */
export interface LightsailInstanceArgs {
    addOn?: pulumi.Input<inputs.LightsailInstanceAddOn>;
    availabilityZone: pulumi.Input<string>;
    blueprintId: pulumi.Input<string>;
    bundleId: pulumi.Input<string>;
    ipAddressType?: pulumi.Input<string>;
    keyPairName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    userData?: pulumi.Input<string>;
}
