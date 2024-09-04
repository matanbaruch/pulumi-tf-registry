// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbProtocol extends pulumi.CustomResource {
    /**
     * Get an existing GslbProtocol resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbProtocolState, opts?: pulumi.CustomResourceOptions): GslbProtocol {
        return new GslbProtocol(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbProtocol:GslbProtocol';

    /**
     * Returns true if the given object is an instance of GslbProtocol.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbProtocol {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbProtocol.__pulumiType;
    }

    /**
     * Automatically detect SLB Config
     */
    public readonly autoDetect!: pulumi.Output<number | undefined>;
    /**
     * Disable new gslb config sync
     */
    public readonly disableNewGslbSync!: pulumi.Output<number | undefined>;
    public readonly enableLists!: pulumi.Output<outputs.GslbProtocolEnableList[] | undefined>;
    public readonly limit!: pulumi.Output<outputs.GslbProtocolLimit | undefined>;
    /**
     * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
     */
    public readonly msgFormatAcos2x!: pulumi.Output<number | undefined>;
    /**
     * name of site or ip address to ping
     */
    public readonly pingSite!: pulumi.Output<string | undefined>;
    public readonly secure!: pulumi.Output<outputs.GslbProtocolSecure | undefined>;
    /**
     * Specify GSLB Message Protocol update period (The GSLB Protocol update interval (seconds), default is 30)
     */
    public readonly statusInterval!: pulumi.Output<number | undefined>;
    /**
     * Use management port for connections in Shared Partition
     */
    public readonly useMgmtPort!: pulumi.Output<number | undefined>;
    /**
     * Use management port for connections in all L3v Partitions
     */
    public readonly useMgmtPortForAllPartitions!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbProtocol resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GslbProtocolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbProtocolArgs | GslbProtocolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbProtocolState | undefined;
            resourceInputs["autoDetect"] = state ? state.autoDetect : undefined;
            resourceInputs["disableNewGslbSync"] = state ? state.disableNewGslbSync : undefined;
            resourceInputs["enableLists"] = state ? state.enableLists : undefined;
            resourceInputs["limit"] = state ? state.limit : undefined;
            resourceInputs["msgFormatAcos2x"] = state ? state.msgFormatAcos2x : undefined;
            resourceInputs["pingSite"] = state ? state.pingSite : undefined;
            resourceInputs["secure"] = state ? state.secure : undefined;
            resourceInputs["statusInterval"] = state ? state.statusInterval : undefined;
            resourceInputs["useMgmtPort"] = state ? state.useMgmtPort : undefined;
            resourceInputs["useMgmtPortForAllPartitions"] = state ? state.useMgmtPortForAllPartitions : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbProtocolArgs | undefined;
            resourceInputs["autoDetect"] = args ? args.autoDetect : undefined;
            resourceInputs["disableNewGslbSync"] = args ? args.disableNewGslbSync : undefined;
            resourceInputs["enableLists"] = args ? args.enableLists : undefined;
            resourceInputs["limit"] = args ? args.limit : undefined;
            resourceInputs["msgFormatAcos2x"] = args ? args.msgFormatAcos2x : undefined;
            resourceInputs["pingSite"] = args ? args.pingSite : undefined;
            resourceInputs["secure"] = args ? args.secure : undefined;
            resourceInputs["statusInterval"] = args ? args.statusInterval : undefined;
            resourceInputs["useMgmtPort"] = args ? args.useMgmtPort : undefined;
            resourceInputs["useMgmtPortForAllPartitions"] = args ? args.useMgmtPortForAllPartitions : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbProtocol.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbProtocol resources.
 */
export interface GslbProtocolState {
    /**
     * Automatically detect SLB Config
     */
    autoDetect?: pulumi.Input<number>;
    /**
     * Disable new gslb config sync
     */
    disableNewGslbSync?: pulumi.Input<number>;
    enableLists?: pulumi.Input<pulumi.Input<inputs.GslbProtocolEnableList>[]>;
    limit?: pulumi.Input<inputs.GslbProtocolLimit>;
    /**
     * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
     */
    msgFormatAcos2x?: pulumi.Input<number>;
    /**
     * name of site or ip address to ping
     */
    pingSite?: pulumi.Input<string>;
    secure?: pulumi.Input<inputs.GslbProtocolSecure>;
    /**
     * Specify GSLB Message Protocol update period (The GSLB Protocol update interval (seconds), default is 30)
     */
    statusInterval?: pulumi.Input<number>;
    /**
     * Use management port for connections in Shared Partition
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * Use management port for connections in all L3v Partitions
     */
    useMgmtPortForAllPartitions?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbProtocol resource.
 */
export interface GslbProtocolArgs {
    /**
     * Automatically detect SLB Config
     */
    autoDetect?: pulumi.Input<number>;
    /**
     * Disable new gslb config sync
     */
    disableNewGslbSync?: pulumi.Input<number>;
    enableLists?: pulumi.Input<pulumi.Input<inputs.GslbProtocolEnableList>[]>;
    limit?: pulumi.Input<inputs.GslbProtocolLimit>;
    /**
     * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
     */
    msgFormatAcos2x?: pulumi.Input<number>;
    /**
     * name of site or ip address to ping
     */
    pingSite?: pulumi.Input<string>;
    secure?: pulumi.Input<inputs.GslbProtocolSecure>;
    /**
     * Specify GSLB Message Protocol update period (The GSLB Protocol update interval (seconds), default is 30)
     */
    statusInterval?: pulumi.Input<number>;
    /**
     * Use management port for connections in Shared Partition
     */
    useMgmtPort?: pulumi.Input<number>;
    /**
     * Use management port for connections in all L3v Partitions
     */
    useMgmtPortForAllPartitions?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
