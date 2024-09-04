// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FwServer extends pulumi.CustomResource {
    /**
     * Get an existing FwServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FwServerState, opts?: pulumi.CustomResourceOptions): FwServer {
        return new FwServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/fwServer:FwServer';

    /**
     * Returns true if the given object is an instance of FwServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FwServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FwServer.__pulumiType;
    }

    /**
     * 'enable': Enable this Real Server; 'disable': Disable this Real Server;
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * Server hostname
     */
    public readonly fqdnName!: pulumi.Output<string | undefined>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    public readonly healthCheck!: pulumi.Output<string | undefined>;
    /**
     * Disable configured health check configuration
     */
    public readonly healthCheckDisable!: pulumi.Output<number | undefined>;
    /**
     * IP Address
     */
    public readonly host!: pulumi.Output<string | undefined>;
    /**
     * Server Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly portLists!: pulumi.Output<outputs.FwServerPortList[] | undefined>;
    /**
     * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN;
     * 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
     */
    public readonly resolveAs!: pulumi.Output<string | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.FwServerSamplingEnable[] | undefined>;
    /**
     * IPV6 address
     */
    public readonly serverIpv6Addr!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FwServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FwServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FwServerArgs | FwServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FwServerState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["fqdnName"] = state ? state.fqdnName : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = state ? state.healthCheckDisable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portLists"] = state ? state.portLists : undefined;
            resourceInputs["resolveAs"] = state ? state.resolveAs : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["serverIpv6Addr"] = state ? state.serverIpv6Addr : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FwServerArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["fqdnName"] = args ? args.fqdnName : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = args ? args.healthCheckDisable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portLists"] = args ? args.portLists : undefined;
            resourceInputs["resolveAs"] = args ? args.resolveAs : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["serverIpv6Addr"] = args ? args.serverIpv6Addr : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FwServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FwServer resources.
 */
export interface FwServerState {
    /**
     * 'enable': Enable this Real Server; 'disable': Disable this Real Server;
     */
    action?: pulumi.Input<string>;
    /**
     * Server hostname
     */
    fqdnName?: pulumi.Input<string>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable configured health check configuration
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * IP Address
     */
    host?: pulumi.Input<string>;
    /**
     * Server Name
     */
    name?: pulumi.Input<string>;
    portLists?: pulumi.Input<pulumi.Input<inputs.FwServerPortList>[]>;
    /**
     * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN;
     * 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
     */
    resolveAs?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.FwServerSamplingEnable>[]>;
    /**
     * IPV6 address
     */
    serverIpv6Addr?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FwServer resource.
 */
export interface FwServerArgs {
    /**
     * 'enable': Enable this Real Server; 'disable': Disable this Real Server;
     */
    action?: pulumi.Input<string>;
    /**
     * Server hostname
     */
    fqdnName?: pulumi.Input<string>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable configured health check configuration
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * IP Address
     */
    host?: pulumi.Input<string>;
    /**
     * Server Name
     */
    name?: pulumi.Input<string>;
    portLists?: pulumi.Input<pulumi.Input<inputs.FwServerPortList>[]>;
    /**
     * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN;
     * 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
     */
    resolveAs?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.FwServerSamplingEnable>[]>;
    /**
     * IPV6 address
     */
    serverIpv6Addr?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
