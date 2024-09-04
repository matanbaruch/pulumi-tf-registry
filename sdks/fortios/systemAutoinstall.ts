// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemAutoinstall extends pulumi.CustomResource {
    /**
     * Get an existing SystemAutoinstall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemAutoinstallState, opts?: pulumi.CustomResourceOptions): SystemAutoinstall {
        return new SystemAutoinstall(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemAutoinstall:SystemAutoinstall';

    /**
     * Returns true if the given object is an instance of SystemAutoinstall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemAutoinstall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemAutoinstall.__pulumiType;
    }

    public readonly autoInstallConfig!: pulumi.Output<string>;
    public readonly autoInstallImage!: pulumi.Output<string>;
    public readonly defaultConfigFile!: pulumi.Output<string>;
    public readonly defaultImageFile!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SystemAutoinstall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemAutoinstallArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemAutoinstallArgs | SystemAutoinstallState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemAutoinstallState | undefined;
            resourceInputs["autoInstallConfig"] = state ? state.autoInstallConfig : undefined;
            resourceInputs["autoInstallImage"] = state ? state.autoInstallImage : undefined;
            resourceInputs["defaultConfigFile"] = state ? state.defaultConfigFile : undefined;
            resourceInputs["defaultImageFile"] = state ? state.defaultImageFile : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SystemAutoinstallArgs | undefined;
            resourceInputs["autoInstallConfig"] = args ? args.autoInstallConfig : undefined;
            resourceInputs["autoInstallImage"] = args ? args.autoInstallImage : undefined;
            resourceInputs["defaultConfigFile"] = args ? args.defaultConfigFile : undefined;
            resourceInputs["defaultImageFile"] = args ? args.defaultImageFile : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemAutoinstall.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemAutoinstall resources.
 */
export interface SystemAutoinstallState {
    autoInstallConfig?: pulumi.Input<string>;
    autoInstallImage?: pulumi.Input<string>;
    defaultConfigFile?: pulumi.Input<string>;
    defaultImageFile?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemAutoinstall resource.
 */
export interface SystemAutoinstallArgs {
    autoInstallConfig?: pulumi.Input<string>;
    autoInstallImage?: pulumi.Input<string>;
    defaultConfigFile?: pulumi.Input<string>;
    defaultImageFile?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
