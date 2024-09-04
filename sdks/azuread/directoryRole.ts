// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DirectoryRole extends pulumi.CustomResource {
    /**
     * Get an existing DirectoryRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectoryRoleState, opts?: pulumi.CustomResourceOptions): DirectoryRole {
        return new DirectoryRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuread:index/directoryRole:DirectoryRole';

    /**
     * Returns true if the given object is an instance of DirectoryRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DirectoryRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DirectoryRole.__pulumiType;
    }

    /**
     * The description of the directory role
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The display name of the directory role
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The object ID of the directory role
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    /**
     * The object ID of the template associated with the directory role
     */
    public readonly templateId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DirectoryRoleTimeouts | undefined>;

    /**
     * Create a DirectoryRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DirectoryRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectoryRoleArgs | DirectoryRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DirectoryRoleState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["objectId"] = state ? state.objectId : undefined;
            resourceInputs["templateId"] = state ? state.templateId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DirectoryRoleArgs | undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DirectoryRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DirectoryRole resources.
 */
export interface DirectoryRoleState {
    /**
     * The description of the directory role
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the directory role
     */
    displayName?: pulumi.Input<string>;
    /**
     * The object ID of the directory role
     */
    objectId?: pulumi.Input<string>;
    /**
     * The object ID of the template associated with the directory role
     */
    templateId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DirectoryRoleTimeouts>;
}

/**
 * The set of arguments for constructing a DirectoryRole resource.
 */
export interface DirectoryRoleArgs {
    /**
     * The display name of the directory role
     */
    displayName?: pulumi.Input<string>;
    /**
     * The object ID of the template associated with the directory role
     */
    templateId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DirectoryRoleTimeouts>;
}
