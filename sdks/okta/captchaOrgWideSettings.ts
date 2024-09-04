// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CaptchaOrgWideSettings extends pulumi.CustomResource {
    /**
     * Get an existing CaptchaOrgWideSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CaptchaOrgWideSettingsState, opts?: pulumi.CustomResourceOptions): CaptchaOrgWideSettings {
        return new CaptchaOrgWideSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'okta:index/captchaOrgWideSettings:CaptchaOrgWideSettings';

    /**
     * Returns true if the given object is an instance of CaptchaOrgWideSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CaptchaOrgWideSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CaptchaOrgWideSettings.__pulumiType;
    }

    /**
     * Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.
     */
    public readonly captchaId!: pulumi.Output<string | undefined>;
    /**
     * Set of pages that have CAPTCHA enabled
     */
    public readonly enabledFors!: pulumi.Output<string[] | undefined>;

    /**
     * Create a CaptchaOrgWideSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CaptchaOrgWideSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CaptchaOrgWideSettingsArgs | CaptchaOrgWideSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CaptchaOrgWideSettingsState | undefined;
            resourceInputs["captchaId"] = state ? state.captchaId : undefined;
            resourceInputs["enabledFors"] = state ? state.enabledFors : undefined;
        } else {
            const args = argsOrState as CaptchaOrgWideSettingsArgs | undefined;
            resourceInputs["captchaId"] = args ? args.captchaId : undefined;
            resourceInputs["enabledFors"] = args ? args.enabledFors : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CaptchaOrgWideSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CaptchaOrgWideSettings resources.
 */
export interface CaptchaOrgWideSettingsState {
    /**
     * Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.
     */
    captchaId?: pulumi.Input<string>;
    /**
     * Set of pages that have CAPTCHA enabled
     */
    enabledFors?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a CaptchaOrgWideSettings resource.
 */
export interface CaptchaOrgWideSettingsArgs {
    /**
     * Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.
     */
    captchaId?: pulumi.Input<string>;
    /**
     * Set of pages that have CAPTCHA enabled
     */
    enabledFors?: pulumi.Input<pulumi.Input<string>[]>;
}
