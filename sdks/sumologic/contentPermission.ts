// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContentPermission extends pulumi.CustomResource {
    /**
     * Get an existing ContentPermission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContentPermissionState, opts?: pulumi.CustomResourceOptions): ContentPermission {
        return new ContentPermission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sumologic:index/contentPermission:ContentPermission';

    /**
     * Returns true if the given object is an instance of ContentPermission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentPermission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentPermission.__pulumiType;
    }

    public readonly contentId!: pulumi.Output<string>;
    public readonly notificationMessage!: pulumi.Output<string | undefined>;
    public readonly notifyRecipient!: pulumi.Output<boolean>;
    public readonly permissions!: pulumi.Output<outputs.ContentPermissionPermission[]>;

    /**
     * Create a ContentPermission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentPermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContentPermissionArgs | ContentPermissionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContentPermissionState | undefined;
            resourceInputs["contentId"] = state ? state.contentId : undefined;
            resourceInputs["notificationMessage"] = state ? state.notificationMessage : undefined;
            resourceInputs["notifyRecipient"] = state ? state.notifyRecipient : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
        } else {
            const args = argsOrState as ContentPermissionArgs | undefined;
            if ((!args || args.contentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentId'");
            }
            if ((!args || args.notifyRecipient === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notifyRecipient'");
            }
            if ((!args || args.permissions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissions'");
            }
            resourceInputs["contentId"] = args ? args.contentId : undefined;
            resourceInputs["notificationMessage"] = args ? args.notificationMessage : undefined;
            resourceInputs["notifyRecipient"] = args ? args.notifyRecipient : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContentPermission.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContentPermission resources.
 */
export interface ContentPermissionState {
    contentId?: pulumi.Input<string>;
    notificationMessage?: pulumi.Input<string>;
    notifyRecipient?: pulumi.Input<boolean>;
    permissions?: pulumi.Input<pulumi.Input<inputs.ContentPermissionPermission>[]>;
}

/**
 * The set of arguments for constructing a ContentPermission resource.
 */
export interface ContentPermissionArgs {
    contentId: pulumi.Input<string>;
    notificationMessage?: pulumi.Input<string>;
    notifyRecipient: pulumi.Input<boolean>;
    permissions: pulumi.Input<pulumi.Input<inputs.ContentPermissionPermission>[]>;
}
