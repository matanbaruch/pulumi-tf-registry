// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SwitchcontrollerGlobal extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerGlobal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerGlobalState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerGlobal {
        return new SwitchcontrollerGlobal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/switchcontrollerGlobal:SwitchcontrollerGlobal';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerGlobal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerGlobal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerGlobal.__pulumiType;
    }

    public readonly acDataPort!: pulumi.Output<number>;
    public readonly acDhcpOptionCode!: pulumi.Output<number>;
    public readonly acDiscoveryMcAddr!: pulumi.Output<string>;
    public readonly acDiscoveryType!: pulumi.Output<string>;
    public readonly acLists!: pulumi.Output<outputs.SwitchcontrollerGlobalAcList[] | undefined>;
    public readonly acPort!: pulumi.Output<number>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly echoInterval!: pulumi.Output<number>;
    public readonly location!: pulumi.Output<string>;
    public readonly maxDiscoveries!: pulumi.Output<number>;
    public readonly maxRetransmit!: pulumi.Output<number>;
    public readonly mgmtMode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tunnelMode!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerGlobal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerGlobalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerGlobalArgs | SwitchcontrollerGlobalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerGlobalState | undefined;
            resourceInputs["acDataPort"] = state ? state.acDataPort : undefined;
            resourceInputs["acDhcpOptionCode"] = state ? state.acDhcpOptionCode : undefined;
            resourceInputs["acDiscoveryMcAddr"] = state ? state.acDiscoveryMcAddr : undefined;
            resourceInputs["acDiscoveryType"] = state ? state.acDiscoveryType : undefined;
            resourceInputs["acLists"] = state ? state.acLists : undefined;
            resourceInputs["acPort"] = state ? state.acPort : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["echoInterval"] = state ? state.echoInterval : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maxDiscoveries"] = state ? state.maxDiscoveries : undefined;
            resourceInputs["maxRetransmit"] = state ? state.maxRetransmit : undefined;
            resourceInputs["mgmtMode"] = state ? state.mgmtMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tunnelMode"] = state ? state.tunnelMode : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerGlobalArgs | undefined;
            resourceInputs["acDataPort"] = args ? args.acDataPort : undefined;
            resourceInputs["acDhcpOptionCode"] = args ? args.acDhcpOptionCode : undefined;
            resourceInputs["acDiscoveryMcAddr"] = args ? args.acDiscoveryMcAddr : undefined;
            resourceInputs["acDiscoveryType"] = args ? args.acDiscoveryType : undefined;
            resourceInputs["acLists"] = args ? args.acLists : undefined;
            resourceInputs["acPort"] = args ? args.acPort : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["echoInterval"] = args ? args.echoInterval : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxDiscoveries"] = args ? args.maxDiscoveries : undefined;
            resourceInputs["maxRetransmit"] = args ? args.maxRetransmit : undefined;
            resourceInputs["mgmtMode"] = args ? args.mgmtMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tunnelMode"] = args ? args.tunnelMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerGlobal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerGlobal resources.
 */
export interface SwitchcontrollerGlobalState {
    acDataPort?: pulumi.Input<number>;
    acDhcpOptionCode?: pulumi.Input<number>;
    acDiscoveryMcAddr?: pulumi.Input<string>;
    acDiscoveryType?: pulumi.Input<string>;
    acLists?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerGlobalAcList>[]>;
    acPort?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    echoInterval?: pulumi.Input<number>;
    location?: pulumi.Input<string>;
    maxDiscoveries?: pulumi.Input<number>;
    maxRetransmit?: pulumi.Input<number>;
    mgmtMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerGlobal resource.
 */
export interface SwitchcontrollerGlobalArgs {
    acDataPort?: pulumi.Input<number>;
    acDhcpOptionCode?: pulumi.Input<number>;
    acDiscoveryMcAddr?: pulumi.Input<string>;
    acDiscoveryType?: pulumi.Input<string>;
    acLists?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerGlobalAcList>[]>;
    acPort?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    echoInterval?: pulumi.Input<number>;
    location?: pulumi.Input<string>;
    maxDiscoveries?: pulumi.Input<number>;
    maxRetransmit?: pulumi.Input<number>;
    mgmtMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
}
