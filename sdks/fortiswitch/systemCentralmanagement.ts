// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemCentralmanagement extends pulumi.CustomResource {
    /**
     * Get an existing SystemCentralmanagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemCentralmanagementState, opts?: pulumi.CustomResourceOptions): SystemCentralmanagement {
        return new SystemCentralmanagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/systemCentralmanagement:SystemCentralmanagement';

    /**
     * Returns true if the given object is an instance of SystemCentralmanagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemCentralmanagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemCentralmanagement.__pulumiType;
    }

    public readonly allowMonitor!: pulumi.Output<string>;
    public readonly allowPushConfiguration!: pulumi.Output<string>;
    public readonly allowPushdFirmware!: pulumi.Output<string>;
    public readonly allowRemoteFirmwareUpgrade!: pulumi.Output<string>;
    public readonly encAlgorithm!: pulumi.Output<string>;
    public readonly fmg!: pulumi.Output<string>;
    public readonly fmgSourceIp!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly scheduleConfigRestore!: pulumi.Output<string>;
    public readonly scheduleScriptRestore!: pulumi.Output<string>;
    public readonly serialNumber!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a SystemCentralmanagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemCentralmanagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemCentralmanagementArgs | SystemCentralmanagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemCentralmanagementState | undefined;
            resourceInputs["allowMonitor"] = state ? state.allowMonitor : undefined;
            resourceInputs["allowPushConfiguration"] = state ? state.allowPushConfiguration : undefined;
            resourceInputs["allowPushdFirmware"] = state ? state.allowPushdFirmware : undefined;
            resourceInputs["allowRemoteFirmwareUpgrade"] = state ? state.allowRemoteFirmwareUpgrade : undefined;
            resourceInputs["encAlgorithm"] = state ? state.encAlgorithm : undefined;
            resourceInputs["fmg"] = state ? state.fmg : undefined;
            resourceInputs["fmgSourceIp"] = state ? state.fmgSourceIp : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["scheduleConfigRestore"] = state ? state.scheduleConfigRestore : undefined;
            resourceInputs["scheduleScriptRestore"] = state ? state.scheduleScriptRestore : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as SystemCentralmanagementArgs | undefined;
            resourceInputs["allowMonitor"] = args ? args.allowMonitor : undefined;
            resourceInputs["allowPushConfiguration"] = args ? args.allowPushConfiguration : undefined;
            resourceInputs["allowPushdFirmware"] = args ? args.allowPushdFirmware : undefined;
            resourceInputs["allowRemoteFirmwareUpgrade"] = args ? args.allowRemoteFirmwareUpgrade : undefined;
            resourceInputs["encAlgorithm"] = args ? args.encAlgorithm : undefined;
            resourceInputs["fmg"] = args ? args.fmg : undefined;
            resourceInputs["fmgSourceIp"] = args ? args.fmgSourceIp : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["scheduleConfigRestore"] = args ? args.scheduleConfigRestore : undefined;
            resourceInputs["scheduleScriptRestore"] = args ? args.scheduleScriptRestore : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemCentralmanagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemCentralmanagement resources.
 */
export interface SystemCentralmanagementState {
    allowMonitor?: pulumi.Input<string>;
    allowPushConfiguration?: pulumi.Input<string>;
    allowPushdFirmware?: pulumi.Input<string>;
    allowRemoteFirmwareUpgrade?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    fmg?: pulumi.Input<string>;
    fmgSourceIp?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    scheduleConfigRestore?: pulumi.Input<string>;
    scheduleScriptRestore?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemCentralmanagement resource.
 */
export interface SystemCentralmanagementArgs {
    allowMonitor?: pulumi.Input<string>;
    allowPushConfiguration?: pulumi.Input<string>;
    allowPushdFirmware?: pulumi.Input<string>;
    allowRemoteFirmwareUpgrade?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    fmg?: pulumi.Input<string>;
    fmgSourceIp?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    scheduleConfigRestore?: pulumi.Input<string>;
    scheduleScriptRestore?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
