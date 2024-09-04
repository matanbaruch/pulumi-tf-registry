// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IpAppProtocolPortTcpPortDisableInterface extends pulumi.CustomResource {
    /**
     * Get an existing IpAppProtocolPortTcpPortDisableInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpAppProtocolPortTcpPortDisableInterfaceState, opts?: pulumi.CustomResourceOptions): IpAppProtocolPortTcpPortDisableInterface {
        return new IpAppProtocolPortTcpPortDisableInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ipAppProtocolPortTcpPortDisableInterface:IpAppProtocolPortTcpPortDisableInterface';

    /**
     * Returns true if the given object is an instance of IpAppProtocolPortTcpPortDisableInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpAppProtocolPortTcpPortDisableInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpAppProtocolPortTcpPortDisableInterface.__pulumiType;
    }

    public readonly ethCfgs!: pulumi.Output<outputs.IpAppProtocolPortTcpPortDisableInterfaceEthCfg[] | undefined>;
    /**
     * Management Interface
     */
    public readonly management!: pulumi.Output<number | undefined>;
    /**
     * Port
     */
    public readonly port!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly veCfgs!: pulumi.Output<outputs.IpAppProtocolPortTcpPortDisableInterfaceVeCfg[] | undefined>;

    /**
     * Create a IpAppProtocolPortTcpPortDisableInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpAppProtocolPortTcpPortDisableInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpAppProtocolPortTcpPortDisableInterfaceArgs | IpAppProtocolPortTcpPortDisableInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpAppProtocolPortTcpPortDisableInterfaceState | undefined;
            resourceInputs["ethCfgs"] = state ? state.ethCfgs : undefined;
            resourceInputs["management"] = state ? state.management : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["veCfgs"] = state ? state.veCfgs : undefined;
        } else {
            const args = argsOrState as IpAppProtocolPortTcpPortDisableInterfaceArgs | undefined;
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["ethCfgs"] = args ? args.ethCfgs : undefined;
            resourceInputs["management"] = args ? args.management : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["veCfgs"] = args ? args.veCfgs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpAppProtocolPortTcpPortDisableInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpAppProtocolPortTcpPortDisableInterface resources.
 */
export interface IpAppProtocolPortTcpPortDisableInterfaceState {
    ethCfgs?: pulumi.Input<pulumi.Input<inputs.IpAppProtocolPortTcpPortDisableInterfaceEthCfg>[]>;
    /**
     * Management Interface
     */
    management?: pulumi.Input<number>;
    /**
     * Port
     */
    port?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    veCfgs?: pulumi.Input<pulumi.Input<inputs.IpAppProtocolPortTcpPortDisableInterfaceVeCfg>[]>;
}

/**
 * The set of arguments for constructing a IpAppProtocolPortTcpPortDisableInterface resource.
 */
export interface IpAppProtocolPortTcpPortDisableInterfaceArgs {
    ethCfgs?: pulumi.Input<pulumi.Input<inputs.IpAppProtocolPortTcpPortDisableInterfaceEthCfg>[]>;
    /**
     * Management Interface
     */
    management?: pulumi.Input<number>;
    /**
     * Port
     */
    port: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    veCfgs?: pulumi.Input<pulumi.Input<inputs.IpAppProtocolPortTcpPortDisableInterfaceVeCfg>[]>;
}
