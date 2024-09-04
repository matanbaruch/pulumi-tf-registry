// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectVpnSslWebPortalBookmarkgroup extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVpnSslWebPortalBookmarkgroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVpnSslWebPortalBookmarkgroupState, opts?: pulumi.CustomResourceOptions): ObjectVpnSslWebPortalBookmarkgroup {
        return new ObjectVpnSslWebPortalBookmarkgroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVpnSslWebPortalBookmarkgroup:ObjectVpnSslWebPortalBookmarkgroup';

    /**
     * Returns true if the given object is an instance of ObjectVpnSslWebPortalBookmarkgroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVpnSslWebPortalBookmarkgroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVpnSslWebPortalBookmarkgroup.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly bookmarks!: pulumi.Output<outputs.ObjectVpnSslWebPortalBookmarkgroupBookmark[] | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly portal!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectVpnSslWebPortalBookmarkgroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectVpnSslWebPortalBookmarkgroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVpnSslWebPortalBookmarkgroupArgs | ObjectVpnSslWebPortalBookmarkgroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVpnSslWebPortalBookmarkgroupState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["bookmarks"] = state ? state.bookmarks : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portal"] = state ? state.portal : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectVpnSslWebPortalBookmarkgroupArgs | undefined;
            if ((!args || args.portal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portal'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["bookmarks"] = args ? args.bookmarks : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portal"] = args ? args.portal : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectVpnSslWebPortalBookmarkgroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVpnSslWebPortalBookmarkgroup resources.
 */
export interface ObjectVpnSslWebPortalBookmarkgroupState {
    adom?: pulumi.Input<string>;
    bookmarks?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalBookmarkgroupBookmark>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    portal?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVpnSslWebPortalBookmarkgroup resource.
 */
export interface ObjectVpnSslWebPortalBookmarkgroupArgs {
    adom?: pulumi.Input<string>;
    bookmarks?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalBookmarkgroupBookmark>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    portal: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
