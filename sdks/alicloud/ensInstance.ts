// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EnsInstance extends pulumi.CustomResource {
    /**
     * Get an existing EnsInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnsInstanceState, opts?: pulumi.CustomResourceOptions): EnsInstance {
        return new EnsInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ensInstance:EnsInstance';

    /**
     * Returns true if the given object is an instance of EnsInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnsInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnsInstance.__pulumiType;
    }

    public readonly amount!: pulumi.Output<number | undefined>;
    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    public readonly autoUseCoupon!: pulumi.Output<string | undefined>;
    public readonly billingCycle!: pulumi.Output<string | undefined>;
    public readonly carrier!: pulumi.Output<string | undefined>;
    public readonly dataDisks!: pulumi.Output<outputs.EnsInstanceDataDisk[] | undefined>;
    public readonly ensRegionId!: pulumi.Output<string>;
    public readonly forceStop!: pulumi.Output<string | undefined>;
    public readonly hostName!: pulumi.Output<string>;
    public readonly imageId!: pulumi.Output<string | undefined>;
    public readonly includeDataDisks!: pulumi.Output<boolean | undefined>;
    public readonly instanceChargeStrategy!: pulumi.Output<string | undefined>;
    public readonly instanceName!: pulumi.Output<string>;
    public readonly instanceType!: pulumi.Output<string>;
    public readonly internetChargeType!: pulumi.Output<string | undefined>;
    public readonly internetMaxBandwidthOut!: pulumi.Output<number>;
    public readonly ipType!: pulumi.Output<string | undefined>;
    public readonly netDistrictCode!: pulumi.Output<string | undefined>;
    public readonly netWorkId!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly passwordInherit!: pulumi.Output<boolean | undefined>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly periodUnit!: pulumi.Output<string | undefined>;
    public readonly privateIpAddress!: pulumi.Output<string>;
    public readonly publicIpIdentification!: pulumi.Output<boolean | undefined>;
    public readonly scheduleAreaLevel!: pulumi.Output<string>;
    public readonly schedulingPriceStrategy!: pulumi.Output<string | undefined>;
    public readonly schedulingStrategy!: pulumi.Output<string | undefined>;
    public readonly securityId!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly systemDisk!: pulumi.Output<outputs.EnsInstanceSystemDisk | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.EnsInstanceTimeouts | undefined>;
    public readonly uniqueSuffix!: pulumi.Output<boolean | undefined>;
    public readonly userData!: pulumi.Output<string | undefined>;
    public readonly vswitchId!: pulumi.Output<string>;

    /**
     * Create a EnsInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnsInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnsInstanceArgs | EnsInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnsInstanceState | undefined;
            resourceInputs["amount"] = state ? state.amount : undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["autoUseCoupon"] = state ? state.autoUseCoupon : undefined;
            resourceInputs["billingCycle"] = state ? state.billingCycle : undefined;
            resourceInputs["carrier"] = state ? state.carrier : undefined;
            resourceInputs["dataDisks"] = state ? state.dataDisks : undefined;
            resourceInputs["ensRegionId"] = state ? state.ensRegionId : undefined;
            resourceInputs["forceStop"] = state ? state.forceStop : undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["includeDataDisks"] = state ? state.includeDataDisks : undefined;
            resourceInputs["instanceChargeStrategy"] = state ? state.instanceChargeStrategy : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["internetChargeType"] = state ? state.internetChargeType : undefined;
            resourceInputs["internetMaxBandwidthOut"] = state ? state.internetMaxBandwidthOut : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["netDistrictCode"] = state ? state.netDistrictCode : undefined;
            resourceInputs["netWorkId"] = state ? state.netWorkId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordInherit"] = state ? state.passwordInherit : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["periodUnit"] = state ? state.periodUnit : undefined;
            resourceInputs["privateIpAddress"] = state ? state.privateIpAddress : undefined;
            resourceInputs["publicIpIdentification"] = state ? state.publicIpIdentification : undefined;
            resourceInputs["scheduleAreaLevel"] = state ? state.scheduleAreaLevel : undefined;
            resourceInputs["schedulingPriceStrategy"] = state ? state.schedulingPriceStrategy : undefined;
            resourceInputs["schedulingStrategy"] = state ? state.schedulingStrategy : undefined;
            resourceInputs["securityId"] = state ? state.securityId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["systemDisk"] = state ? state.systemDisk : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uniqueSuffix"] = state ? state.uniqueSuffix : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
        } else {
            const args = argsOrState as EnsInstanceArgs | undefined;
            if ((!args || args.instanceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceType'");
            }
            if ((!args || args.paymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paymentType'");
            }
            if ((!args || args.scheduleAreaLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleAreaLevel'");
            }
            resourceInputs["amount"] = args ? args.amount : undefined;
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["autoUseCoupon"] = args ? args.autoUseCoupon : undefined;
            resourceInputs["billingCycle"] = args ? args.billingCycle : undefined;
            resourceInputs["carrier"] = args ? args.carrier : undefined;
            resourceInputs["dataDisks"] = args ? args.dataDisks : undefined;
            resourceInputs["ensRegionId"] = args ? args.ensRegionId : undefined;
            resourceInputs["forceStop"] = args ? args.forceStop : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["includeDataDisks"] = args ? args.includeDataDisks : undefined;
            resourceInputs["instanceChargeStrategy"] = args ? args.instanceChargeStrategy : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["internetChargeType"] = args ? args.internetChargeType : undefined;
            resourceInputs["internetMaxBandwidthOut"] = args ? args.internetMaxBandwidthOut : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["netDistrictCode"] = args ? args.netDistrictCode : undefined;
            resourceInputs["netWorkId"] = args ? args.netWorkId : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordInherit"] = args ? args.passwordInherit : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["periodUnit"] = args ? args.periodUnit : undefined;
            resourceInputs["privateIpAddress"] = args ? args.privateIpAddress : undefined;
            resourceInputs["publicIpIdentification"] = args ? args.publicIpIdentification : undefined;
            resourceInputs["scheduleAreaLevel"] = args ? args.scheduleAreaLevel : undefined;
            resourceInputs["schedulingPriceStrategy"] = args ? args.schedulingPriceStrategy : undefined;
            resourceInputs["schedulingStrategy"] = args ? args.schedulingStrategy : undefined;
            resourceInputs["securityId"] = args ? args.securityId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["systemDisk"] = args ? args.systemDisk : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["uniqueSuffix"] = args ? args.uniqueSuffix : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(EnsInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnsInstance resources.
 */
export interface EnsInstanceState {
    amount?: pulumi.Input<number>;
    autoRenew?: pulumi.Input<boolean>;
    autoUseCoupon?: pulumi.Input<string>;
    billingCycle?: pulumi.Input<string>;
    carrier?: pulumi.Input<string>;
    dataDisks?: pulumi.Input<pulumi.Input<inputs.EnsInstanceDataDisk>[]>;
    ensRegionId?: pulumi.Input<string>;
    forceStop?: pulumi.Input<string>;
    hostName?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    includeDataDisks?: pulumi.Input<boolean>;
    instanceChargeStrategy?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    internetChargeType?: pulumi.Input<string>;
    internetMaxBandwidthOut?: pulumi.Input<number>;
    ipType?: pulumi.Input<string>;
    netDistrictCode?: pulumi.Input<string>;
    netWorkId?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    passwordInherit?: pulumi.Input<boolean>;
    paymentType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    publicIpIdentification?: pulumi.Input<boolean>;
    scheduleAreaLevel?: pulumi.Input<string>;
    schedulingPriceStrategy?: pulumi.Input<string>;
    schedulingStrategy?: pulumi.Input<string>;
    securityId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    systemDisk?: pulumi.Input<inputs.EnsInstanceSystemDisk>;
    timeouts?: pulumi.Input<inputs.EnsInstanceTimeouts>;
    uniqueSuffix?: pulumi.Input<boolean>;
    userData?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EnsInstance resource.
 */
export interface EnsInstanceArgs {
    amount?: pulumi.Input<number>;
    autoRenew?: pulumi.Input<boolean>;
    autoUseCoupon?: pulumi.Input<string>;
    billingCycle?: pulumi.Input<string>;
    carrier?: pulumi.Input<string>;
    dataDisks?: pulumi.Input<pulumi.Input<inputs.EnsInstanceDataDisk>[]>;
    ensRegionId?: pulumi.Input<string>;
    forceStop?: pulumi.Input<string>;
    hostName?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    includeDataDisks?: pulumi.Input<boolean>;
    instanceChargeStrategy?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    instanceType: pulumi.Input<string>;
    internetChargeType?: pulumi.Input<string>;
    internetMaxBandwidthOut?: pulumi.Input<number>;
    ipType?: pulumi.Input<string>;
    netDistrictCode?: pulumi.Input<string>;
    netWorkId?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    passwordInherit?: pulumi.Input<boolean>;
    paymentType: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    publicIpIdentification?: pulumi.Input<boolean>;
    scheduleAreaLevel: pulumi.Input<string>;
    schedulingPriceStrategy?: pulumi.Input<string>;
    schedulingStrategy?: pulumi.Input<string>;
    securityId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    systemDisk?: pulumi.Input<inputs.EnsInstanceSystemDisk>;
    timeouts?: pulumi.Input<inputs.EnsInstanceTimeouts>;
    uniqueSuffix?: pulumi.Input<boolean>;
    userData?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
}
