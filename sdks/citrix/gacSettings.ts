// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GacSettings extends pulumi.CustomResource {
    /**
     * Get an existing GacSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GacSettingsState, opts?: pulumi.CustomResourceOptions): GacSettings {
        return new GacSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/gacSettings:GacSettings';

    /**
     * Returns true if the given object is an instance of GacSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GacSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GacSettings.__pulumiType;
    }

    /**
     * Defines the device platform and the associated settings. Currently, only settings objects with value type of integer,
     * boolean, strings and list of strings is supported.
     */
    public readonly appSettings!: pulumi.Output<outputs.GacSettingsAppSettings>;
    /**
     * Description of the settings record.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Name of the settings record.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Citrix workspace application store url for which settings are to be configured. The value is case sensitive and requires
     * the protocol ("https" or "http") and port number.
     */
    public readonly serviceUrl!: pulumi.Output<string>;
    /**
     * Defines whether to use the settings for app configuration or not. Defaults to `true`.
     */
    public readonly useForAppConfig!: pulumi.Output<boolean>;

    /**
     * Create a GacSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GacSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GacSettingsArgs | GacSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GacSettingsState | undefined;
            resourceInputs["appSettings"] = state ? state.appSettings : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serviceUrl"] = state ? state.serviceUrl : undefined;
            resourceInputs["useForAppConfig"] = state ? state.useForAppConfig : undefined;
        } else {
            const args = argsOrState as GacSettingsArgs | undefined;
            if ((!args || args.appSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appSettings'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.serviceUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceUrl'");
            }
            resourceInputs["appSettings"] = args ? args.appSettings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serviceUrl"] = args ? args.serviceUrl : undefined;
            resourceInputs["useForAppConfig"] = args ? args.useForAppConfig : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GacSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GacSettings resources.
 */
export interface GacSettingsState {
    /**
     * Defines the device platform and the associated settings. Currently, only settings objects with value type of integer,
     * boolean, strings and list of strings is supported.
     */
    appSettings?: pulumi.Input<inputs.GacSettingsAppSettings>;
    /**
     * Description of the settings record.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the settings record.
     */
    name?: pulumi.Input<string>;
    /**
     * Citrix workspace application store url for which settings are to be configured. The value is case sensitive and requires
     * the protocol ("https" or "http") and port number.
     */
    serviceUrl?: pulumi.Input<string>;
    /**
     * Defines whether to use the settings for app configuration or not. Defaults to `true`.
     */
    useForAppConfig?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a GacSettings resource.
 */
export interface GacSettingsArgs {
    /**
     * Defines the device platform and the associated settings. Currently, only settings objects with value type of integer,
     * boolean, strings and list of strings is supported.
     */
    appSettings: pulumi.Input<inputs.GacSettingsAppSettings>;
    /**
     * Description of the settings record.
     */
    description: pulumi.Input<string>;
    /**
     * Name of the settings record.
     */
    name?: pulumi.Input<string>;
    /**
     * Citrix workspace application store url for which settings are to be configured. The value is case sensitive and requires
     * the protocol ("https" or "http") and port number.
     */
    serviceUrl: pulumi.Input<string>;
    /**
     * Defines whether to use the settings for app configuration or not. Defaults to `true`.
     */
    useForAppConfig?: pulumi.Input<boolean>;
}
