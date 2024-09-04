// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSsoforticloudadmin extends pulumi.CustomResource {
    /**
     * Get an existing SystemSsoforticloudadmin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSsoforticloudadminState, opts?: pulumi.CustomResourceOptions): SystemSsoforticloudadmin {
        return new SystemSsoforticloudadmin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemSsoforticloudadmin:SystemSsoforticloudadmin';

    /**
     * Returns true if the given object is an instance of SystemSsoforticloudadmin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSsoforticloudadmin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSsoforticloudadmin.__pulumiType;
    }

    public readonly accprofiles!: pulumi.Output<string[]>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly guiDefaultDashboardTemplate!: pulumi.Output<string | undefined>;
    public readonly guiIgnoreInvalidSignatureVersion!: pulumi.Output<string | undefined>;
    public readonly guiIgnoreReleaseOverviewVersion!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly vdoms!: pulumi.Output<string[]>;

    /**
     * Create a SystemSsoforticloudadmin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSsoforticloudadminArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSsoforticloudadminArgs | SystemSsoforticloudadminState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSsoforticloudadminState | undefined;
            resourceInputs["accprofiles"] = state ? state.accprofiles : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["guiDefaultDashboardTemplate"] = state ? state.guiDefaultDashboardTemplate : undefined;
            resourceInputs["guiIgnoreInvalidSignatureVersion"] = state ? state.guiIgnoreInvalidSignatureVersion : undefined;
            resourceInputs["guiIgnoreReleaseOverviewVersion"] = state ? state.guiIgnoreReleaseOverviewVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vdoms"] = state ? state.vdoms : undefined;
        } else {
            const args = argsOrState as SystemSsoforticloudadminArgs | undefined;
            resourceInputs["accprofiles"] = args ? args.accprofiles : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["guiDefaultDashboardTemplate"] = args ? args.guiDefaultDashboardTemplate : undefined;
            resourceInputs["guiIgnoreInvalidSignatureVersion"] = args ? args.guiIgnoreInvalidSignatureVersion : undefined;
            resourceInputs["guiIgnoreReleaseOverviewVersion"] = args ? args.guiIgnoreReleaseOverviewVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vdoms"] = args ? args.vdoms : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSsoforticloudadmin.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSsoforticloudadmin resources.
 */
export interface SystemSsoforticloudadminState {
    accprofiles?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    guiDefaultDashboardTemplate?: pulumi.Input<string>;
    guiIgnoreInvalidSignatureVersion?: pulumi.Input<string>;
    guiIgnoreReleaseOverviewVersion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vdoms?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystemSsoforticloudadmin resource.
 */
export interface SystemSsoforticloudadminArgs {
    accprofiles?: pulumi.Input<pulumi.Input<string>[]>;
    deviceName?: pulumi.Input<string>;
    guiDefaultDashboardTemplate?: pulumi.Input<string>;
    guiIgnoreInvalidSignatureVersion?: pulumi.Input<string>;
    guiIgnoreReleaseOverviewVersion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vdoms?: pulumi.Input<pulumi.Input<string>[]>;
}
