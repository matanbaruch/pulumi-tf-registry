// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServerSettings extends pulumi.CustomResource {
    /**
     * Get an existing ServerSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerSettingsState, opts?: pulumi.CustomResourceOptions): ServerSettings {
        return new ServerSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/serverSettings:ServerSettings';

    /**
     * Returns true if the given object is an instance of ServerSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerSettings.__pulumiType;
    }

    public readonly federationInfo!: pulumi.Output<outputs.ServerSettingsFederationInfo>;
    /**
     * @deprecated Deprecated
     */
    public readonly rolesAndProtocols!: pulumi.Output<outputs.ServerSettingsRolesAndProtocols | undefined>;

    /**
     * Create a ServerSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerSettingsArgs | ServerSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServerSettingsState | undefined;
            resourceInputs["federationInfo"] = state ? state.federationInfo : undefined;
            resourceInputs["rolesAndProtocols"] = state ? state.rolesAndProtocols : undefined;
        } else {
            const args = argsOrState as ServerSettingsArgs | undefined;
            if ((!args || args.federationInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'federationInfo'");
            }
            resourceInputs["federationInfo"] = args ? args.federationInfo : undefined;
            resourceInputs["rolesAndProtocols"] = args ? args.rolesAndProtocols : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServerSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServerSettings resources.
 */
export interface ServerSettingsState {
    federationInfo?: pulumi.Input<inputs.ServerSettingsFederationInfo>;
    /**
     * @deprecated Deprecated
     */
    rolesAndProtocols?: pulumi.Input<inputs.ServerSettingsRolesAndProtocols>;
}

/**
 * The set of arguments for constructing a ServerSettings resource.
 */
export interface ServerSettingsArgs {
    federationInfo: pulumi.Input<inputs.ServerSettingsFederationInfo>;
    /**
     * @deprecated Deprecated
     */
    rolesAndProtocols?: pulumi.Input<inputs.ServerSettingsRolesAndProtocols>;
}
