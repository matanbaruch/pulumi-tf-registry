// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppPackage extends pulumi.CustomResource {
    /**
     * Get an existing AppPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppPackageState, opts?: pulumi.CustomResourceOptions): AppPackage {
        return new AppPackage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'splunkconfig:index/appPackage:AppPackage';

    /**
     * Returns true if the given object is an instance of AppPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppPackage.__pulumiType;
    }

    /**
     * ID of the app
     */
    public readonly appId!: pulumi.Output<string>;
    /**
     * Version of the app, directly from the provider
     */
    public /*out*/ readonly baseVersion!: pulumi.Output<string>;
    /**
     * Version of the app, accounting for patch count
     */
    public /*out*/ readonly effectiveVersion!: pulumi.Output<string>;
    /**
     * File content of the app
     */
    public /*out*/ readonly files!: pulumi.Output<outputs.AppPackageFile[]>;
    /**
     * Number of patches to the app since setting/changing its version
     */
    public /*out*/ readonly patchCount!: pulumi.Output<number>;
    /**
     * Path in which to create the app file
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Full path of the generated tarball
     */
    public /*out*/ readonly tarballPath!: pulumi.Output<string>;

    /**
     * Create a AppPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppPackageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppPackageArgs | AppPackageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppPackageState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["baseVersion"] = state ? state.baseVersion : undefined;
            resourceInputs["effectiveVersion"] = state ? state.effectiveVersion : undefined;
            resourceInputs["files"] = state ? state.files : undefined;
            resourceInputs["patchCount"] = state ? state.patchCount : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["tarballPath"] = state ? state.tarballPath : undefined;
        } else {
            const args = argsOrState as AppPackageArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["baseVersion"] = undefined /*out*/;
            resourceInputs["effectiveVersion"] = undefined /*out*/;
            resourceInputs["files"] = undefined /*out*/;
            resourceInputs["patchCount"] = undefined /*out*/;
            resourceInputs["tarballPath"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppPackage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppPackage resources.
 */
export interface AppPackageState {
    /**
     * ID of the app
     */
    appId?: pulumi.Input<string>;
    /**
     * Version of the app, directly from the provider
     */
    baseVersion?: pulumi.Input<string>;
    /**
     * Version of the app, accounting for patch count
     */
    effectiveVersion?: pulumi.Input<string>;
    /**
     * File content of the app
     */
    files?: pulumi.Input<pulumi.Input<inputs.AppPackageFile>[]>;
    /**
     * Number of patches to the app since setting/changing its version
     */
    patchCount?: pulumi.Input<number>;
    /**
     * Path in which to create the app file
     */
    path?: pulumi.Input<string>;
    /**
     * Full path of the generated tarball
     */
    tarballPath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppPackage resource.
 */
export interface AppPackageArgs {
    /**
     * ID of the app
     */
    appId: pulumi.Input<string>;
    /**
     * Path in which to create the app file
     */
    path: pulumi.Input<string>;
}
