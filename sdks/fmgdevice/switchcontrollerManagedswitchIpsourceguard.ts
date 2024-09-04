// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SwitchcontrollerManagedswitchIpsourceguard extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerManagedswitchIpsourceguard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerManagedswitchIpsourceguardState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerManagedswitchIpsourceguard {
        return new SwitchcontrollerManagedswitchIpsourceguard(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerManagedswitchIpsourceguard:SwitchcontrollerManagedswitchIpsourceguard';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerManagedswitchIpsourceguard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerManagedswitchIpsourceguard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerManagedswitchIpsourceguard.__pulumiType;
    }

    public readonly bindingEntries!: pulumi.Output<outputs.SwitchcontrollerManagedswitchIpsourceguardBindingEntry[] | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly managedSwitch!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<string | undefined>;

    /**
     * Create a SwitchcontrollerManagedswitchIpsourceguard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SwitchcontrollerManagedswitchIpsourceguardArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerManagedswitchIpsourceguardArgs | SwitchcontrollerManagedswitchIpsourceguardState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerManagedswitchIpsourceguardState | undefined;
            resourceInputs["bindingEntries"] = state ? state.bindingEntries : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["managedSwitch"] = state ? state.managedSwitch : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerManagedswitchIpsourceguardArgs | undefined;
            if ((!args || args.managedSwitch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedSwitch'");
            }
            resourceInputs["bindingEntries"] = args ? args.bindingEntries : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["managedSwitch"] = args ? args.managedSwitch : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerManagedswitchIpsourceguard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerManagedswitchIpsourceguard resources.
 */
export interface SwitchcontrollerManagedswitchIpsourceguardState {
    bindingEntries?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerManagedswitchIpsourceguardBindingEntry>[]>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    managedSwitch?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerManagedswitchIpsourceguard resource.
 */
export interface SwitchcontrollerManagedswitchIpsourceguardArgs {
    bindingEntries?: pulumi.Input<pulumi.Input<inputs.SwitchcontrollerManagedswitchIpsourceguardBindingEntry>[]>;
    description?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    managedSwitch: pulumi.Input<string>;
    port?: pulumi.Input<string>;
}
