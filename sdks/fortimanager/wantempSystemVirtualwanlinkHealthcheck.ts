// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WantempSystemVirtualwanlinkHealthcheck extends pulumi.CustomResource {
    /**
     * Get an existing WantempSystemVirtualwanlinkHealthcheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WantempSystemVirtualwanlinkHealthcheckState, opts?: pulumi.CustomResourceOptions): WantempSystemVirtualwanlinkHealthcheck {
        return new WantempSystemVirtualwanlinkHealthcheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/wantempSystemVirtualwanlinkHealthcheck:WantempSystemVirtualwanlinkHealthcheck';

    /**
     * Returns true if the given object is an instance of WantempSystemVirtualwanlinkHealthcheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WantempSystemVirtualwanlinkHealthcheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WantempSystemVirtualwanlinkHealthcheck.__pulumiType;
    }

    public readonly _dynamicServer!: pulumi.Output<string | undefined>;
    public readonly addrMode!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly diffservcode!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly failtime!: pulumi.Output<number | undefined>;
    public readonly haPriority!: pulumi.Output<number | undefined>;
    public readonly httpAgent!: pulumi.Output<string | undefined>;
    public readonly httpGet!: pulumi.Output<string | undefined>;
    public readonly httpMatch!: pulumi.Output<string | undefined>;
    public readonly internetServiceId!: pulumi.Output<string | undefined>;
    public readonly interval!: pulumi.Output<number | undefined>;
    public readonly members!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly packetSize!: pulumi.Output<number | undefined>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly probePackets!: pulumi.Output<string | undefined>;
    public readonly probeTimeout!: pulumi.Output<number | undefined>;
    public readonly protocol!: pulumi.Output<string | undefined>;
    public readonly recoverytime!: pulumi.Output<number | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly securityMode!: pulumi.Output<string | undefined>;
    public readonly servers!: pulumi.Output<string[]>;
    public readonly slaFailLogPeriod!: pulumi.Output<number | undefined>;
    public readonly slaPassLogPeriod!: pulumi.Output<number | undefined>;
    public readonly slas!: pulumi.Output<outputs.WantempSystemVirtualwanlinkHealthcheckSla[] | undefined>;
    public readonly thresholdAlertJitter!: pulumi.Output<number | undefined>;
    public readonly thresholdAlertLatency!: pulumi.Output<number | undefined>;
    public readonly thresholdAlertPacketloss!: pulumi.Output<number | undefined>;
    public readonly thresholdWarningJitter!: pulumi.Output<number | undefined>;
    public readonly thresholdWarningLatency!: pulumi.Output<number | undefined>;
    public readonly thresholdWarningPacketloss!: pulumi.Output<number | undefined>;
    public readonly updateCascadeInterface!: pulumi.Output<string | undefined>;
    public readonly updateStaticRoute!: pulumi.Output<string | undefined>;
    public readonly wanprof!: pulumi.Output<string>;

    /**
     * Create a WantempSystemVirtualwanlinkHealthcheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WantempSystemVirtualwanlinkHealthcheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WantempSystemVirtualwanlinkHealthcheckArgs | WantempSystemVirtualwanlinkHealthcheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WantempSystemVirtualwanlinkHealthcheckState | undefined;
            resourceInputs["_dynamicServer"] = state ? state._dynamicServer : undefined;
            resourceInputs["addrMode"] = state ? state.addrMode : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["diffservcode"] = state ? state.diffservcode : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["failtime"] = state ? state.failtime : undefined;
            resourceInputs["haPriority"] = state ? state.haPriority : undefined;
            resourceInputs["httpAgent"] = state ? state.httpAgent : undefined;
            resourceInputs["httpGet"] = state ? state.httpGet : undefined;
            resourceInputs["httpMatch"] = state ? state.httpMatch : undefined;
            resourceInputs["internetServiceId"] = state ? state.internetServiceId : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packetSize"] = state ? state.packetSize : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["probePackets"] = state ? state.probePackets : undefined;
            resourceInputs["probeTimeout"] = state ? state.probeTimeout : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["recoverytime"] = state ? state.recoverytime : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["securityMode"] = state ? state.securityMode : undefined;
            resourceInputs["servers"] = state ? state.servers : undefined;
            resourceInputs["slaFailLogPeriod"] = state ? state.slaFailLogPeriod : undefined;
            resourceInputs["slaPassLogPeriod"] = state ? state.slaPassLogPeriod : undefined;
            resourceInputs["slas"] = state ? state.slas : undefined;
            resourceInputs["thresholdAlertJitter"] = state ? state.thresholdAlertJitter : undefined;
            resourceInputs["thresholdAlertLatency"] = state ? state.thresholdAlertLatency : undefined;
            resourceInputs["thresholdAlertPacketloss"] = state ? state.thresholdAlertPacketloss : undefined;
            resourceInputs["thresholdWarningJitter"] = state ? state.thresholdWarningJitter : undefined;
            resourceInputs["thresholdWarningLatency"] = state ? state.thresholdWarningLatency : undefined;
            resourceInputs["thresholdWarningPacketloss"] = state ? state.thresholdWarningPacketloss : undefined;
            resourceInputs["updateCascadeInterface"] = state ? state.updateCascadeInterface : undefined;
            resourceInputs["updateStaticRoute"] = state ? state.updateStaticRoute : undefined;
            resourceInputs["wanprof"] = state ? state.wanprof : undefined;
        } else {
            const args = argsOrState as WantempSystemVirtualwanlinkHealthcheckArgs | undefined;
            if ((!args || args.wanprof === undefined) && !opts.urn) {
                throw new Error("Missing required property 'wanprof'");
            }
            resourceInputs["_dynamicServer"] = args ? args._dynamicServer : undefined;
            resourceInputs["addrMode"] = args ? args.addrMode : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["diffservcode"] = args ? args.diffservcode : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["failtime"] = args ? args.failtime : undefined;
            resourceInputs["haPriority"] = args ? args.haPriority : undefined;
            resourceInputs["httpAgent"] = args ? args.httpAgent : undefined;
            resourceInputs["httpGet"] = args ? args.httpGet : undefined;
            resourceInputs["httpMatch"] = args ? args.httpMatch : undefined;
            resourceInputs["internetServiceId"] = args ? args.internetServiceId : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packetSize"] = args ? args.packetSize : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["probePackets"] = args ? args.probePackets : undefined;
            resourceInputs["probeTimeout"] = args ? args.probeTimeout : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["recoverytime"] = args ? args.recoverytime : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["securityMode"] = args ? args.securityMode : undefined;
            resourceInputs["servers"] = args ? args.servers : undefined;
            resourceInputs["slaFailLogPeriod"] = args ? args.slaFailLogPeriod : undefined;
            resourceInputs["slaPassLogPeriod"] = args ? args.slaPassLogPeriod : undefined;
            resourceInputs["slas"] = args ? args.slas : undefined;
            resourceInputs["thresholdAlertJitter"] = args ? args.thresholdAlertJitter : undefined;
            resourceInputs["thresholdAlertLatency"] = args ? args.thresholdAlertLatency : undefined;
            resourceInputs["thresholdAlertPacketloss"] = args ? args.thresholdAlertPacketloss : undefined;
            resourceInputs["thresholdWarningJitter"] = args ? args.thresholdWarningJitter : undefined;
            resourceInputs["thresholdWarningLatency"] = args ? args.thresholdWarningLatency : undefined;
            resourceInputs["thresholdWarningPacketloss"] = args ? args.thresholdWarningPacketloss : undefined;
            resourceInputs["updateCascadeInterface"] = args ? args.updateCascadeInterface : undefined;
            resourceInputs["updateStaticRoute"] = args ? args.updateStaticRoute : undefined;
            resourceInputs["wanprof"] = args ? args.wanprof : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(WantempSystemVirtualwanlinkHealthcheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WantempSystemVirtualwanlinkHealthcheck resources.
 */
export interface WantempSystemVirtualwanlinkHealthcheckState {
    _dynamicServer?: pulumi.Input<string>;
    addrMode?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    diffservcode?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    failtime?: pulumi.Input<number>;
    haPriority?: pulumi.Input<number>;
    httpAgent?: pulumi.Input<string>;
    httpGet?: pulumi.Input<string>;
    httpMatch?: pulumi.Input<string>;
    internetServiceId?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    members?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packetSize?: pulumi.Input<number>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    port?: pulumi.Input<number>;
    probePackets?: pulumi.Input<string>;
    probeTimeout?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    recoverytime?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    securityMode?: pulumi.Input<string>;
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    slaFailLogPeriod?: pulumi.Input<number>;
    slaPassLogPeriod?: pulumi.Input<number>;
    slas?: pulumi.Input<pulumi.Input<inputs.WantempSystemVirtualwanlinkHealthcheckSla>[]>;
    thresholdAlertJitter?: pulumi.Input<number>;
    thresholdAlertLatency?: pulumi.Input<number>;
    thresholdAlertPacketloss?: pulumi.Input<number>;
    thresholdWarningJitter?: pulumi.Input<number>;
    thresholdWarningLatency?: pulumi.Input<number>;
    thresholdWarningPacketloss?: pulumi.Input<number>;
    updateCascadeInterface?: pulumi.Input<string>;
    updateStaticRoute?: pulumi.Input<string>;
    wanprof?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WantempSystemVirtualwanlinkHealthcheck resource.
 */
export interface WantempSystemVirtualwanlinkHealthcheckArgs {
    _dynamicServer?: pulumi.Input<string>;
    addrMode?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    diffservcode?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    failtime?: pulumi.Input<number>;
    haPriority?: pulumi.Input<number>;
    httpAgent?: pulumi.Input<string>;
    httpGet?: pulumi.Input<string>;
    httpMatch?: pulumi.Input<string>;
    internetServiceId?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    members?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packetSize?: pulumi.Input<number>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    port?: pulumi.Input<number>;
    probePackets?: pulumi.Input<string>;
    probeTimeout?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    recoverytime?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    securityMode?: pulumi.Input<string>;
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    slaFailLogPeriod?: pulumi.Input<number>;
    slaPassLogPeriod?: pulumi.Input<number>;
    slas?: pulumi.Input<pulumi.Input<inputs.WantempSystemVirtualwanlinkHealthcheckSla>[]>;
    thresholdAlertJitter?: pulumi.Input<number>;
    thresholdAlertLatency?: pulumi.Input<number>;
    thresholdAlertPacketloss?: pulumi.Input<number>;
    thresholdWarningJitter?: pulumi.Input<number>;
    thresholdWarningLatency?: pulumi.Input<number>;
    thresholdWarningPacketloss?: pulumi.Input<number>;
    updateCascadeInterface?: pulumi.Input<string>;
    updateStaticRoute?: pulumi.Input<string>;
    wanprof: pulumi.Input<string>;
}
