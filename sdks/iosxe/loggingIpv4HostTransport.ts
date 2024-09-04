// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LoggingIpv4HostTransport extends pulumi.CustomResource {
    /**
     * Get an existing LoggingIpv4HostTransport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingIpv4HostTransportState, opts?: pulumi.CustomResourceOptions): LoggingIpv4HostTransport {
        return new LoggingIpv4HostTransport(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxe:index/loggingIpv4HostTransport:LoggingIpv4HostTransport';

    /**
     * Returns true if the given object is an instance of LoggingIpv4HostTransport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingIpv4HostTransport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingIpv4HostTransport.__pulumiType;
    }

    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    public readonly ipv4Host!: pulumi.Output<string>;
    /**
     * Port Number List
     */
    public readonly transportTcpPorts!: pulumi.Output<outputs.LoggingIpv4HostTransportTransportTcpPort[] | undefined>;
    /**
     * Port Number List
     */
    public readonly transportTlsPorts!: pulumi.Output<outputs.LoggingIpv4HostTransportTransportTlsPort[] | undefined>;
    /**
     * Port Number List
     */
    public readonly transportUdpPorts!: pulumi.Output<outputs.LoggingIpv4HostTransportTransportUdpPort[] | undefined>;

    /**
     * Create a LoggingIpv4HostTransport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggingIpv4HostTransportArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingIpv4HostTransportArgs | LoggingIpv4HostTransportState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingIpv4HostTransportState | undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["ipv4Host"] = state ? state.ipv4Host : undefined;
            resourceInputs["transportTcpPorts"] = state ? state.transportTcpPorts : undefined;
            resourceInputs["transportTlsPorts"] = state ? state.transportTlsPorts : undefined;
            resourceInputs["transportUdpPorts"] = state ? state.transportUdpPorts : undefined;
        } else {
            const args = argsOrState as LoggingIpv4HostTransportArgs | undefined;
            if ((!args || args.ipv4Host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4Host'");
            }
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["ipv4Host"] = args ? args.ipv4Host : undefined;
            resourceInputs["transportTcpPorts"] = args ? args.transportTcpPorts : undefined;
            resourceInputs["transportTlsPorts"] = args ? args.transportTlsPorts : undefined;
            resourceInputs["transportUdpPorts"] = args ? args.transportUdpPorts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingIpv4HostTransport.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingIpv4HostTransport resources.
 */
export interface LoggingIpv4HostTransportState {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    ipv4Host?: pulumi.Input<string>;
    /**
     * Port Number List
     */
    transportTcpPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportTcpPort>[]>;
    /**
     * Port Number List
     */
    transportTlsPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportTlsPort>[]>;
    /**
     * Port Number List
     */
    transportUdpPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportUdpPort>[]>;
}

/**
 * The set of arguments for constructing a LoggingIpv4HostTransport resource.
 */
export interface LoggingIpv4HostTransportArgs {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    ipv4Host: pulumi.Input<string>;
    /**
     * Port Number List
     */
    transportTcpPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportTcpPort>[]>;
    /**
     * Port Number List
     */
    transportTlsPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportTlsPort>[]>;
    /**
     * Port Number List
     */
    transportUdpPorts?: pulumi.Input<pulumi.Input<inputs.LoggingIpv4HostTransportTransportUdpPort>[]>;
}
