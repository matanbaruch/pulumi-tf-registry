// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EulaSettings extends pulumi.CustomResource {
    /**
     * Get an existing EulaSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EulaSettingsState, opts?: pulumi.CustomResourceOptions): EulaSettings {
        return new EulaSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/eulaSettings:EulaSettings';

    /**
     * Returns true if the given object is an instance of EulaSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EulaSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EulaSettings.__pulumiType;
    }

    /**
     * Display end user terms to new users logging in to the environment
     */
    public readonly enableEula!: pulumi.Output<boolean>;
    /**
     * The scope of this setting (environment)
     */
    public readonly scope!: pulumi.Output<string | undefined>;

    /**
     * Create a EulaSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EulaSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EulaSettingsArgs | EulaSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EulaSettingsState | undefined;
            resourceInputs["enableEula"] = state ? state.enableEula : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as EulaSettingsArgs | undefined;
            if ((!args || args.enableEula === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableEula'");
            }
            resourceInputs["enableEula"] = args ? args.enableEula : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EulaSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EulaSettings resources.
 */
export interface EulaSettingsState {
    /**
     * Display end user terms to new users logging in to the environment
     */
    enableEula?: pulumi.Input<boolean>;
    /**
     * The scope of this setting (environment)
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EulaSettings resource.
 */
export interface EulaSettingsArgs {
    /**
     * Display end user terms to new users logging in to the environment
     */
    enableEula: pulumi.Input<boolean>;
    /**
     * The scope of this setting (environment)
     */
    scope?: pulumi.Input<string>;
}
