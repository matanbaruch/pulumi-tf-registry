// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SccProjectCustomModule extends pulumi.CustomResource {
    /**
     * Get an existing SccProjectCustomModule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SccProjectCustomModuleState, opts?: pulumi.CustomResourceOptions): SccProjectCustomModule {
        return new SccProjectCustomModule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/sccProjectCustomModule:SccProjectCustomModule';

    /**
     * Returns true if the given object is an instance of SccProjectCustomModule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SccProjectCustomModule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SccProjectCustomModule.__pulumiType;
    }

    /**
     * If empty, indicates that the custom module was created in the organization,folder, or project in which you are viewing
     * the custom module. Otherwise, ancestor_module specifies the organization or folder from which the custom module is
     * inherited.
     */
    public /*out*/ readonly ancestorModule!: pulumi.Output<string>;
    /**
     * The user specified custom configuration for the module.
     */
    public readonly customConfig!: pulumi.Output<outputs.SccProjectCustomModuleCustomConfig>;
    /**
     * The display name of the Security Health Analytics custom module. This display name becomes the finding category for all
     * findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a
     * lowercase letter, and contain alphanumeric characters or underscores only.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]
     */
    public readonly enablementState!: pulumi.Output<string>;
    /**
     * The editor that last updated the custom module.
     */
    public /*out*/ readonly lastEditor!: pulumi.Output<string>;
    /**
     * The resource name of the custom module. Its format is
     * "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}". The id {customModule} is
     * server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SccProjectCustomModuleTimeouts | undefined>;
    /**
     * The time at which the custom module was last updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a SccProjectCustomModule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SccProjectCustomModuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SccProjectCustomModuleArgs | SccProjectCustomModuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SccProjectCustomModuleState | undefined;
            resourceInputs["ancestorModule"] = state ? state.ancestorModule : undefined;
            resourceInputs["customConfig"] = state ? state.customConfig : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enablementState"] = state ? state.enablementState : undefined;
            resourceInputs["lastEditor"] = state ? state.lastEditor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as SccProjectCustomModuleArgs | undefined;
            if ((!args || args.customConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customConfig'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.enablementState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enablementState'");
            }
            resourceInputs["customConfig"] = args ? args.customConfig : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enablementState"] = args ? args.enablementState : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ancestorModule"] = undefined /*out*/;
            resourceInputs["lastEditor"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SccProjectCustomModule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SccProjectCustomModule resources.
 */
export interface SccProjectCustomModuleState {
    /**
     * If empty, indicates that the custom module was created in the organization,folder, or project in which you are viewing
     * the custom module. Otherwise, ancestor_module specifies the organization or folder from which the custom module is
     * inherited.
     */
    ancestorModule?: pulumi.Input<string>;
    /**
     * The user specified custom configuration for the module.
     */
    customConfig?: pulumi.Input<inputs.SccProjectCustomModuleCustomConfig>;
    /**
     * The display name of the Security Health Analytics custom module. This display name becomes the finding category for all
     * findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a
     * lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]
     */
    enablementState?: pulumi.Input<string>;
    /**
     * The editor that last updated the custom module.
     */
    lastEditor?: pulumi.Input<string>;
    /**
     * The resource name of the custom module. Its format is
     * "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}". The id {customModule} is
     * server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SccProjectCustomModuleTimeouts>;
    /**
     * The time at which the custom module was last updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SccProjectCustomModule resource.
 */
export interface SccProjectCustomModuleArgs {
    /**
     * The user specified custom configuration for the module.
     */
    customConfig: pulumi.Input<inputs.SccProjectCustomModuleCustomConfig>;
    /**
     * The display name of the Security Health Analytics custom module. This display name becomes the finding category for all
     * findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a
     * lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName: pulumi.Input<string>;
    /**
     * The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]
     */
    enablementState: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SccProjectCustomModuleTimeouts>;
}
