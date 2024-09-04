// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetappPool extends pulumi.CustomResource {
    /**
     * Get an existing NetappPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetappPoolState, opts?: pulumi.CustomResourceOptions): NetappPool {
        return new NetappPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/netappPool:NetappPool';

    /**
     * Returns true if the given object is an instance of NetappPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetappPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetappPool.__pulumiType;
    }

    public readonly accountName!: pulumi.Output<string>;
    public readonly encryptionType!: pulumi.Output<string | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly qosType!: pulumi.Output<string | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly serviceLevel!: pulumi.Output<string>;
    public readonly sizeInTb!: pulumi.Output<number>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NetappPoolTimeouts | undefined>;

    /**
     * Create a NetappPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetappPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetappPoolArgs | NetappPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetappPoolState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["encryptionType"] = state ? state.encryptionType : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qosType"] = state ? state.qosType : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serviceLevel"] = state ? state.serviceLevel : undefined;
            resourceInputs["sizeInTb"] = state ? state.sizeInTb : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetappPoolArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceLevel'");
            }
            if ((!args || args.sizeInTb === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sizeInTb'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["encryptionType"] = args ? args.encryptionType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qosType"] = args ? args.qosType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceLevel"] = args ? args.serviceLevel : undefined;
            resourceInputs["sizeInTb"] = args ? args.sizeInTb : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetappPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetappPool resources.
 */
export interface NetappPoolState {
    accountName?: pulumi.Input<string>;
    encryptionType?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    qosType?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    serviceLevel?: pulumi.Input<string>;
    sizeInTb?: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetappPoolTimeouts>;
}

/**
 * The set of arguments for constructing a NetappPool resource.
 */
export interface NetappPoolArgs {
    accountName: pulumi.Input<string>;
    encryptionType?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    qosType?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    serviceLevel: pulumi.Input<string>;
    sizeInTb: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetappPoolTimeouts>;
}
