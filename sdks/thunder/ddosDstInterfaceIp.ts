// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstInterfaceIp extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstInterfaceIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstInterfaceIpState, opts?: pulumi.CustomResourceOptions): DdosDstInterfaceIp {
        return new DdosDstInterfaceIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstInterfaceIp:DdosDstInterfaceIp';

    /**
     * Returns true if the given object is an instance of DdosDstInterfaceIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstInterfaceIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstInterfaceIp.__pulumiType;
    }

    /**
     * IP address of interface
     */
    public readonly addr!: pulumi.Output<string>;
    public readonly ipProtoLists!: pulumi.Output<outputs.DdosDstInterfaceIpIpProtoList[] | undefined>;
    public readonly l4TypeLists!: pulumi.Output<outputs.DdosDstInterfaceIpL4TypeList[] | undefined>;
    /**
     * Enable logging of limit exceed drops
     */
    public readonly logEnable!: pulumi.Output<number | undefined>;
    /**
     * Enable periodic log while event is continuing
     */
    public readonly logPeriodic!: pulumi.Output<number | undefined>;
    public readonly portLists!: pulumi.Output<outputs.DdosDstInterfaceIpPortList[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstInterfaceIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstInterfaceIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstInterfaceIpArgs | DdosDstInterfaceIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstInterfaceIpState | undefined;
            resourceInputs["addr"] = state ? state.addr : undefined;
            resourceInputs["ipProtoLists"] = state ? state.ipProtoLists : undefined;
            resourceInputs["l4TypeLists"] = state ? state.l4TypeLists : undefined;
            resourceInputs["logEnable"] = state ? state.logEnable : undefined;
            resourceInputs["logPeriodic"] = state ? state.logPeriodic : undefined;
            resourceInputs["portLists"] = state ? state.portLists : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstInterfaceIpArgs | undefined;
            if ((!args || args.addr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addr'");
            }
            resourceInputs["addr"] = args ? args.addr : undefined;
            resourceInputs["ipProtoLists"] = args ? args.ipProtoLists : undefined;
            resourceInputs["l4TypeLists"] = args ? args.l4TypeLists : undefined;
            resourceInputs["logEnable"] = args ? args.logEnable : undefined;
            resourceInputs["logPeriodic"] = args ? args.logPeriodic : undefined;
            resourceInputs["portLists"] = args ? args.portLists : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstInterfaceIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstInterfaceIp resources.
 */
export interface DdosDstInterfaceIpState {
    /**
     * IP address of interface
     */
    addr?: pulumi.Input<string>;
    ipProtoLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpIpProtoList>[]>;
    l4TypeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpL4TypeList>[]>;
    /**
     * Enable logging of limit exceed drops
     */
    logEnable?: pulumi.Input<number>;
    /**
     * Enable periodic log while event is continuing
     */
    logPeriodic?: pulumi.Input<number>;
    portLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpPortList>[]>;
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
 * The set of arguments for constructing a DdosDstInterfaceIp resource.
 */
export interface DdosDstInterfaceIpArgs {
    /**
     * IP address of interface
     */
    addr: pulumi.Input<string>;
    ipProtoLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpIpProtoList>[]>;
    l4TypeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpL4TypeList>[]>;
    /**
     * Enable logging of limit exceed drops
     */
    logEnable?: pulumi.Input<number>;
    /**
     * Enable periodic log while event is continuing
     */
    logPeriodic?: pulumi.Input<number>;
    portLists?: pulumi.Input<pulumi.Input<inputs.DdosDstInterfaceIpPortList>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
