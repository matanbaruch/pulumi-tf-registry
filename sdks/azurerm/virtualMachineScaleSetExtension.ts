// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualMachineScaleSetExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMachineScaleSetExtensionState, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetExtension {
        return new VirtualMachineScaleSetExtension(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/virtualMachineScaleSetExtension:VirtualMachineScaleSetExtension';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSetExtension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSetExtension.__pulumiType;
    }

    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    public readonly automaticUpgradeEnabled!: pulumi.Output<boolean | undefined>;
    public readonly failureSuppressionEnabled!: pulumi.Output<boolean | undefined>;
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly protectedSettings!: pulumi.Output<string | undefined>;
    public readonly protectedSettingsFromKeyVault!: pulumi.Output<outputs.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault | undefined>;
    public readonly provisionAfterExtensions!: pulumi.Output<string[] | undefined>;
    public readonly publisher!: pulumi.Output<string>;
    public readonly settings!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualMachineScaleSetExtensionTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly typeHandlerVersion!: pulumi.Output<string>;
    public readonly virtualMachineScaleSetId!: pulumi.Output<string>;

    /**
     * Create a VirtualMachineScaleSetExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetExtensionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualMachineScaleSetExtensionArgs | VirtualMachineScaleSetExtensionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualMachineScaleSetExtensionState | undefined;
            resourceInputs["autoUpgradeMinorVersion"] = state ? state.autoUpgradeMinorVersion : undefined;
            resourceInputs["automaticUpgradeEnabled"] = state ? state.automaticUpgradeEnabled : undefined;
            resourceInputs["failureSuppressionEnabled"] = state ? state.failureSuppressionEnabled : undefined;
            resourceInputs["forceUpdateTag"] = state ? state.forceUpdateTag : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protectedSettings"] = state ? state.protectedSettings : undefined;
            resourceInputs["protectedSettingsFromKeyVault"] = state ? state.protectedSettingsFromKeyVault : undefined;
            resourceInputs["provisionAfterExtensions"] = state ? state.provisionAfterExtensions : undefined;
            resourceInputs["publisher"] = state ? state.publisher : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["typeHandlerVersion"] = state ? state.typeHandlerVersion : undefined;
            resourceInputs["virtualMachineScaleSetId"] = state ? state.virtualMachineScaleSetId : undefined;
        } else {
            const args = argsOrState as VirtualMachineScaleSetExtensionArgs | undefined;
            if ((!args || args.publisher === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publisher'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.typeHandlerVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeHandlerVersion'");
            }
            if ((!args || args.virtualMachineScaleSetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineScaleSetId'");
            }
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["automaticUpgradeEnabled"] = args ? args.automaticUpgradeEnabled : undefined;
            resourceInputs["failureSuppressionEnabled"] = args ? args.failureSuppressionEnabled : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protectedSettings"] = args?.protectedSettings ? pulumi.secret(args.protectedSettings) : undefined;
            resourceInputs["protectedSettingsFromKeyVault"] = args ? args.protectedSettingsFromKeyVault : undefined;
            resourceInputs["provisionAfterExtensions"] = args ? args.provisionAfterExtensions : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            resourceInputs["virtualMachineScaleSetId"] = args ? args.virtualMachineScaleSetId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["protectedSettings"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(VirtualMachineScaleSetExtension.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualMachineScaleSetExtension resources.
 */
export interface VirtualMachineScaleSetExtensionState {
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    automaticUpgradeEnabled?: pulumi.Input<boolean>;
    failureSuppressionEnabled?: pulumi.Input<boolean>;
    forceUpdateTag?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protectedSettings?: pulumi.Input<string>;
    protectedSettingsFromKeyVault?: pulumi.Input<inputs.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault>;
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    publisher?: pulumi.Input<string>;
    settings?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VirtualMachineScaleSetExtensionTimeouts>;
    type?: pulumi.Input<string>;
    typeHandlerVersion?: pulumi.Input<string>;
    virtualMachineScaleSetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSetExtension resource.
 */
export interface VirtualMachineScaleSetExtensionArgs {
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    automaticUpgradeEnabled?: pulumi.Input<boolean>;
    failureSuppressionEnabled?: pulumi.Input<boolean>;
    forceUpdateTag?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    protectedSettings?: pulumi.Input<string>;
    protectedSettingsFromKeyVault?: pulumi.Input<inputs.VirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault>;
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    publisher: pulumi.Input<string>;
    settings?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VirtualMachineScaleSetExtensionTimeouts>;
    type: pulumi.Input<string>;
    typeHandlerVersion: pulumi.Input<string>;
    virtualMachineScaleSetId: pulumi.Input<string>;
}
