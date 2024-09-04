// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpnIpsecServer extends pulumi.CustomResource {
    /**
     * Get an existing VpnIpsecServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnIpsecServerState, opts?: pulumi.CustomResourceOptions): VpnIpsecServer {
        return new VpnIpsecServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/vpnIpsecServer:VpnIpsecServer';

    /**
     * Returns true if the given object is an instance of VpnIpsecServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnIpsecServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnIpsecServer.__pulumiType;
    }

    public readonly clientIpPool!: pulumi.Output<string>;
    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    public readonly effectImmediately!: pulumi.Output<boolean | undefined>;
    public readonly ikeConfigs!: pulumi.Output<outputs.VpnIpsecServerIkeConfig[] | undefined>;
    public readonly ipsecConfigs!: pulumi.Output<outputs.VpnIpsecServerIpsecConfig[] | undefined>;
    public readonly ipsecServerName!: pulumi.Output<string | undefined>;
    public readonly localSubnet!: pulumi.Output<string>;
    public readonly psk!: pulumi.Output<string>;
    public readonly pskEnabled!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VpnIpsecServerTimeouts | undefined>;
    public readonly vpnGatewayId!: pulumi.Output<string>;

    /**
     * Create a VpnIpsecServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnIpsecServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnIpsecServerArgs | VpnIpsecServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnIpsecServerState | undefined;
            resourceInputs["clientIpPool"] = state ? state.clientIpPool : undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["effectImmediately"] = state ? state.effectImmediately : undefined;
            resourceInputs["ikeConfigs"] = state ? state.ikeConfigs : undefined;
            resourceInputs["ipsecConfigs"] = state ? state.ipsecConfigs : undefined;
            resourceInputs["ipsecServerName"] = state ? state.ipsecServerName : undefined;
            resourceInputs["localSubnet"] = state ? state.localSubnet : undefined;
            resourceInputs["psk"] = state ? state.psk : undefined;
            resourceInputs["pskEnabled"] = state ? state.pskEnabled : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpnGatewayId"] = state ? state.vpnGatewayId : undefined;
        } else {
            const args = argsOrState as VpnIpsecServerArgs | undefined;
            if ((!args || args.clientIpPool === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientIpPool'");
            }
            if ((!args || args.localSubnet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localSubnet'");
            }
            if ((!args || args.vpnGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpnGatewayId'");
            }
            resourceInputs["clientIpPool"] = args ? args.clientIpPool : undefined;
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["effectImmediately"] = args ? args.effectImmediately : undefined;
            resourceInputs["ikeConfigs"] = args ? args.ikeConfigs : undefined;
            resourceInputs["ipsecConfigs"] = args ? args.ipsecConfigs : undefined;
            resourceInputs["ipsecServerName"] = args ? args.ipsecServerName : undefined;
            resourceInputs["localSubnet"] = args ? args.localSubnet : undefined;
            resourceInputs["psk"] = args ? args.psk : undefined;
            resourceInputs["pskEnabled"] = args ? args.pskEnabled : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpnGatewayId"] = args ? args.vpnGatewayId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnIpsecServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnIpsecServer resources.
 */
export interface VpnIpsecServerState {
    clientIpPool?: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    effectImmediately?: pulumi.Input<boolean>;
    ikeConfigs?: pulumi.Input<pulumi.Input<inputs.VpnIpsecServerIkeConfig>[]>;
    ipsecConfigs?: pulumi.Input<pulumi.Input<inputs.VpnIpsecServerIpsecConfig>[]>;
    ipsecServerName?: pulumi.Input<string>;
    localSubnet?: pulumi.Input<string>;
    psk?: pulumi.Input<string>;
    pskEnabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.VpnIpsecServerTimeouts>;
    vpnGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnIpsecServer resource.
 */
export interface VpnIpsecServerArgs {
    clientIpPool: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    effectImmediately?: pulumi.Input<boolean>;
    ikeConfigs?: pulumi.Input<pulumi.Input<inputs.VpnIpsecServerIkeConfig>[]>;
    ipsecConfigs?: pulumi.Input<pulumi.Input<inputs.VpnIpsecServerIpsecConfig>[]>;
    ipsecServerName?: pulumi.Input<string>;
    localSubnet: pulumi.Input<string>;
    psk?: pulumi.Input<string>;
    pskEnabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.VpnIpsecServerTimeouts>;
    vpnGatewayId: pulumi.Input<string>;
}
