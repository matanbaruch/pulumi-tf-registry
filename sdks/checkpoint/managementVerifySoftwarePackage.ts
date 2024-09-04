// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementVerifySoftwarePackage extends pulumi.CustomResource {
    /**
     * Get an existing ManagementVerifySoftwarePackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementVerifySoftwarePackageState, opts?: pulumi.CustomResourceOptions): ManagementVerifySoftwarePackage {
        return new ManagementVerifySoftwarePackage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementVerifySoftwarePackage:ManagementVerifySoftwarePackage';

    /**
     * Returns true if the given object is an instance of ManagementVerifySoftwarePackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementVerifySoftwarePackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementVerifySoftwarePackage.__pulumiType;
    }

    /**
     * The number of targets, on which the same package is installed at the same time.
     */
    public readonly concurrencyLimit!: pulumi.Output<number | undefined>;
    /**
     * The name of the software package.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * On what targets to execute this command. Targets may be identified by their name, or object unique identifier.
     */
    public readonly targets!: pulumi.Output<string[]>;
    /**
     * Command asynchronous task unique identifier.
     */
    public /*out*/ readonly taskId!: pulumi.Output<string>;

    /**
     * Create a ManagementVerifySoftwarePackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementVerifySoftwarePackageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementVerifySoftwarePackageArgs | ManagementVerifySoftwarePackageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementVerifySoftwarePackageState | undefined;
            resourceInputs["concurrencyLimit"] = state ? state.concurrencyLimit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["taskId"] = state ? state.taskId : undefined;
        } else {
            const args = argsOrState as ManagementVerifySoftwarePackageArgs | undefined;
            if ((!args || args.targets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targets'");
            }
            resourceInputs["concurrencyLimit"] = args ? args.concurrencyLimit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["taskId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementVerifySoftwarePackage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementVerifySoftwarePackage resources.
 */
export interface ManagementVerifySoftwarePackageState {
    /**
     * The number of targets, on which the same package is installed at the same time.
     */
    concurrencyLimit?: pulumi.Input<number>;
    /**
     * The name of the software package.
     */
    name?: pulumi.Input<string>;
    /**
     * On what targets to execute this command. Targets may be identified by their name, or object unique identifier.
     */
    targets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Command asynchronous task unique identifier.
     */
    taskId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementVerifySoftwarePackage resource.
 */
export interface ManagementVerifySoftwarePackageArgs {
    /**
     * The number of targets, on which the same package is installed at the same time.
     */
    concurrencyLimit?: pulumi.Input<number>;
    /**
     * The name of the software package.
     */
    name?: pulumi.Input<string>;
    /**
     * On what targets to execute this command. Targets may be identified by their name, or object unique identifier.
     */
    targets: pulumi.Input<pulumi.Input<string>[]>;
}
