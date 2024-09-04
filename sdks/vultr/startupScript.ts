// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StartupScript extends pulumi.CustomResource {
    /**
     * Get an existing StartupScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StartupScriptState, opts?: pulumi.CustomResourceOptions): StartupScript {
        return new StartupScript(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vultr:index/startupScript:StartupScript';

    /**
     * Returns true if the given object is an instance of StartupScript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StartupScript {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StartupScript.__pulumiType;
    }

    public /*out*/ readonly dateCreated!: pulumi.Output<string>;
    public /*out*/ readonly dateModified!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly script!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a StartupScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StartupScriptArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StartupScriptArgs | StartupScriptState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StartupScriptState | undefined;
            resourceInputs["dateCreated"] = state ? state.dateCreated : undefined;
            resourceInputs["dateModified"] = state ? state.dateModified : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as StartupScriptArgs | undefined;
            if ((!args || args.script === undefined) && !opts.urn) {
                throw new Error("Missing required property 'script'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["dateCreated"] = undefined /*out*/;
            resourceInputs["dateModified"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StartupScript.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StartupScript resources.
 */
export interface StartupScriptState {
    dateCreated?: pulumi.Input<string>;
    dateModified?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StartupScript resource.
 */
export interface StartupScriptArgs {
    name?: pulumi.Input<string>;
    script: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
