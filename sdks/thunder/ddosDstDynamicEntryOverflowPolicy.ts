// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstDynamicEntryOverflowPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstDynamicEntryOverflowPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstDynamicEntryOverflowPolicyState, opts?: pulumi.CustomResourceOptions): DdosDstDynamicEntryOverflowPolicy {
        return new DdosDstDynamicEntryOverflowPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstDynamicEntryOverflowPolicy:DdosDstDynamicEntryOverflowPolicy';

    /**
     * Returns true if the given object is an instance of DdosDstDynamicEntryOverflowPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstDynamicEntryOverflowPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstDynamicEntryOverflowPolicy.__pulumiType;
    }

    /**
     * 'ip': ip; 'ipv6': ipv6;
     */
    public readonly defaultAddressType!: pulumi.Output<string>;
    /**
     * Disable certain drops during packet processing
     */
    public readonly dropDisable!: pulumi.Output<number | undefined>;
    /**
     * Immediately forward L4 drops
     */
    public readonly dropDisableFwdImmediate!: pulumi.Output<number | undefined>;
    public readonly exceedLogCfg!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyExceedLogCfg | undefined>;
    public readonly exceedLogDepCfg!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg | undefined>;
    /**
     * Global limit ID
     */
    public readonly glid!: pulumi.Output<string | undefined>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    public readonly inboundForwardDscp!: pulumi.Output<number | undefined>;
    public readonly ipProtoLists!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyIpProtoList[] | undefined>;
    public readonly l4TypeLists!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyL4TypeList[] | undefined>;
    /**
     * Enable periodic log while event is continuing
     */
    public readonly logPeriodic!: pulumi.Output<number | undefined>;
    /**
     * To set dscp value for outbound
     */
    public readonly outboundForwardDscp!: pulumi.Output<number | undefined>;
    public readonly portLists!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyPortList[] | undefined>;
    public readonly srcPortLists!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicySrcPortList[] | undefined>;
    public readonly template!: pulumi.Output<outputs.DdosDstDynamicEntryOverflowPolicyTemplate | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstDynamicEntryOverflowPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstDynamicEntryOverflowPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstDynamicEntryOverflowPolicyArgs | DdosDstDynamicEntryOverflowPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstDynamicEntryOverflowPolicyState | undefined;
            resourceInputs["defaultAddressType"] = state ? state.defaultAddressType : undefined;
            resourceInputs["dropDisable"] = state ? state.dropDisable : undefined;
            resourceInputs["dropDisableFwdImmediate"] = state ? state.dropDisableFwdImmediate : undefined;
            resourceInputs["exceedLogCfg"] = state ? state.exceedLogCfg : undefined;
            resourceInputs["exceedLogDepCfg"] = state ? state.exceedLogDepCfg : undefined;
            resourceInputs["glid"] = state ? state.glid : undefined;
            resourceInputs["inboundForwardDscp"] = state ? state.inboundForwardDscp : undefined;
            resourceInputs["ipProtoLists"] = state ? state.ipProtoLists : undefined;
            resourceInputs["l4TypeLists"] = state ? state.l4TypeLists : undefined;
            resourceInputs["logPeriodic"] = state ? state.logPeriodic : undefined;
            resourceInputs["outboundForwardDscp"] = state ? state.outboundForwardDscp : undefined;
            resourceInputs["portLists"] = state ? state.portLists : undefined;
            resourceInputs["srcPortLists"] = state ? state.srcPortLists : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstDynamicEntryOverflowPolicyArgs | undefined;
            if ((!args || args.defaultAddressType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultAddressType'");
            }
            resourceInputs["defaultAddressType"] = args ? args.defaultAddressType : undefined;
            resourceInputs["dropDisable"] = args ? args.dropDisable : undefined;
            resourceInputs["dropDisableFwdImmediate"] = args ? args.dropDisableFwdImmediate : undefined;
            resourceInputs["exceedLogCfg"] = args ? args.exceedLogCfg : undefined;
            resourceInputs["exceedLogDepCfg"] = args ? args.exceedLogDepCfg : undefined;
            resourceInputs["glid"] = args ? args.glid : undefined;
            resourceInputs["inboundForwardDscp"] = args ? args.inboundForwardDscp : undefined;
            resourceInputs["ipProtoLists"] = args ? args.ipProtoLists : undefined;
            resourceInputs["l4TypeLists"] = args ? args.l4TypeLists : undefined;
            resourceInputs["logPeriodic"] = args ? args.logPeriodic : undefined;
            resourceInputs["outboundForwardDscp"] = args ? args.outboundForwardDscp : undefined;
            resourceInputs["portLists"] = args ? args.portLists : undefined;
            resourceInputs["srcPortLists"] = args ? args.srcPortLists : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstDynamicEntryOverflowPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstDynamicEntryOverflowPolicy resources.
 */
export interface DdosDstDynamicEntryOverflowPolicyState {
    /**
     * 'ip': ip; 'ipv6': ipv6;
     */
    defaultAddressType?: pulumi.Input<string>;
    /**
     * Disable certain drops during packet processing
     */
    dropDisable?: pulumi.Input<number>;
    /**
     * Immediately forward L4 drops
     */
    dropDisableFwdImmediate?: pulumi.Input<number>;
    exceedLogCfg?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyExceedLogCfg>;
    exceedLogDepCfg?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    inboundForwardDscp?: pulumi.Input<number>;
    ipProtoLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyIpProtoList>[]>;
    l4TypeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyL4TypeList>[]>;
    /**
     * Enable periodic log while event is continuing
     */
    logPeriodic?: pulumi.Input<number>;
    /**
     * To set dscp value for outbound
     */
    outboundForwardDscp?: pulumi.Input<number>;
    portLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyPortList>[]>;
    srcPortLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicySrcPortList>[]>;
    template?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyTemplate>;
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
 * The set of arguments for constructing a DdosDstDynamicEntryOverflowPolicy resource.
 */
export interface DdosDstDynamicEntryOverflowPolicyArgs {
    /**
     * 'ip': ip; 'ipv6': ipv6;
     */
    defaultAddressType: pulumi.Input<string>;
    /**
     * Disable certain drops during packet processing
     */
    dropDisable?: pulumi.Input<number>;
    /**
     * Immediately forward L4 drops
     */
    dropDisableFwdImmediate?: pulumi.Input<number>;
    exceedLogCfg?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyExceedLogCfg>;
    exceedLogDepCfg?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyExceedLogDepCfg>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    inboundForwardDscp?: pulumi.Input<number>;
    ipProtoLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyIpProtoList>[]>;
    l4TypeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyL4TypeList>[]>;
    /**
     * Enable periodic log while event is continuing
     */
    logPeriodic?: pulumi.Input<number>;
    /**
     * To set dscp value for outbound
     */
    outboundForwardDscp?: pulumi.Input<number>;
    portLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyPortList>[]>;
    srcPortLists?: pulumi.Input<pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicySrcPortList>[]>;
    template?: pulumi.Input<inputs.DdosDstDynamicEntryOverflowPolicyTemplate>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
