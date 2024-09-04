// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnmpServerHostIpv4Host extends pulumi.CustomResource {
    /**
     * Get an existing SnmpServerHostIpv4Host resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpServerHostIpv4HostState, opts?: pulumi.CustomResourceOptions): SnmpServerHostIpv4Host {
        return new SnmpServerHostIpv4Host(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/snmpServerHostIpv4Host:SnmpServerHostIpv4Host';

    /**
     * Returns true if the given object is an instance of SnmpServerHostIpv4Host.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpServerHostIpv4Host {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpServerHostIpv4Host.__pulumiType;
    }

    /**
     * IPV4 address of SNMP trap host
     */
    public readonly ipv4Addr!: pulumi.Output<string>;
    /**
     * The trap host's UDP port number(default: 162)
     */
    public readonly udpPort!: pulumi.Output<number | undefined>;
    /**
     * SNMPv3 user to send traps (User Name)
     */
    public readonly user!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * SNMPv1/v2c community string
     */
    public readonly v1V2cComm!: pulumi.Output<string | undefined>;
    /**
     * 'v1': Use SNMPv1; 'v2c': Use SNMPv2c; 'v3': User SNMPv3;
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a SnmpServerHostIpv4Host resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnmpServerHostIpv4HostArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpServerHostIpv4HostArgs | SnmpServerHostIpv4HostState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpServerHostIpv4HostState | undefined;
            resourceInputs["ipv4Addr"] = state ? state.ipv4Addr : undefined;
            resourceInputs["udpPort"] = state ? state.udpPort : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["v1V2cComm"] = state ? state.v1V2cComm : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SnmpServerHostIpv4HostArgs | undefined;
            if ((!args || args.ipv4Addr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4Addr'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["ipv4Addr"] = args ? args.ipv4Addr : undefined;
            resourceInputs["udpPort"] = args ? args.udpPort : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["v1V2cComm"] = args ? args.v1V2cComm : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpServerHostIpv4Host.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpServerHostIpv4Host resources.
 */
export interface SnmpServerHostIpv4HostState {
    /**
     * IPV4 address of SNMP trap host
     */
    ipv4Addr?: pulumi.Input<string>;
    /**
     * The trap host's UDP port number(default: 162)
     */
    udpPort?: pulumi.Input<number>;
    /**
     * SNMPv3 user to send traps (User Name)
     */
    user?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * SNMPv1/v2c community string
     */
    v1V2cComm?: pulumi.Input<string>;
    /**
     * 'v1': Use SNMPv1; 'v2c': Use SNMPv2c; 'v3': User SNMPv3;
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnmpServerHostIpv4Host resource.
 */
export interface SnmpServerHostIpv4HostArgs {
    /**
     * IPV4 address of SNMP trap host
     */
    ipv4Addr: pulumi.Input<string>;
    /**
     * The trap host's UDP port number(default: 162)
     */
    udpPort?: pulumi.Input<number>;
    /**
     * SNMPv3 user to send traps (User Name)
     */
    user?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * SNMPv1/v2c community string
     */
    v1V2cComm?: pulumi.Input<string>;
    /**
     * 'v1': Use SNMPv1; 'v2c': Use SNMPv2c; 'v3': User SNMPv3;
     */
    version: pulumi.Input<string>;
}
