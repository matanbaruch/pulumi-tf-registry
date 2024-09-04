// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Release extends pulumi.CustomResource {
    /**
     * Get an existing Release resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReleaseState, opts?: pulumi.CustomResourceOptions): Release {
        return new Release(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/release:Release';

    /**
     * Returns true if the given object is an instance of Release.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Release {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Release.__pulumiType;
    }

    /**
     * The URL for the release assets.
     */
    public /*out*/ readonly assetsUrl!: pulumi.Output<string>;
    /**
     * Text describing the contents of the tag.
     */
    public readonly body!: pulumi.Output<string | undefined>;
    /**
     * The date and time the release was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * If specified, a discussion of the specified category is created and linked to the release. The value must be a category
     * that already exists in the repository.
     */
    public readonly discussionCategoryName!: pulumi.Output<string | undefined>;
    /**
     * Set to 'false' to create a published release.
     */
    public readonly draft!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Set to 'true' to automatically generate the name and body for this release. If 'name' is specified, the specified name
     * will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to
     * the automatically generated notes.
     */
    public readonly generateReleaseNotes!: pulumi.Output<boolean | undefined>;
    /**
     * The HTML URL for the release.
     */
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    /**
     * The name of the release.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The node ID of the release.
     */
    public /*out*/ readonly nodeId!: pulumi.Output<string>;
    /**
     * Set to 'false' to identify the release as a full release.
     */
    public readonly prerelease!: pulumi.Output<boolean | undefined>;
    /**
     * The date and time the release was published.
     */
    public /*out*/ readonly publishedAt!: pulumi.Output<string>;
    /**
     * The ID of the release.
     */
    public /*out*/ readonly releaseId!: pulumi.Output<number>;
    /**
     * The name of the repository.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * The name of the tag.
     */
    public readonly tagName!: pulumi.Output<string>;
    /**
     * The URL for the tarball of the release.
     */
    public /*out*/ readonly tarballUrl!: pulumi.Output<string>;
    /**
     * The branch name or commit SHA the tag is created from.
     */
    public readonly targetCommitish!: pulumi.Output<string | undefined>;
    /**
     * The URL for the uploaded assets of release.
     */
    public /*out*/ readonly uploadUrl!: pulumi.Output<string>;
    /**
     * The URL for the release.
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * The URL for the zipball of the release.
     */
    public /*out*/ readonly zipballUrl!: pulumi.Output<string>;

    /**
     * Create a Release resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReleaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReleaseArgs | ReleaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReleaseState | undefined;
            resourceInputs["assetsUrl"] = state ? state.assetsUrl : undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["discussionCategoryName"] = state ? state.discussionCategoryName : undefined;
            resourceInputs["draft"] = state ? state.draft : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["generateReleaseNotes"] = state ? state.generateReleaseNotes : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeId"] = state ? state.nodeId : undefined;
            resourceInputs["prerelease"] = state ? state.prerelease : undefined;
            resourceInputs["publishedAt"] = state ? state.publishedAt : undefined;
            resourceInputs["releaseId"] = state ? state.releaseId : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["tagName"] = state ? state.tagName : undefined;
            resourceInputs["tarballUrl"] = state ? state.tarballUrl : undefined;
            resourceInputs["targetCommitish"] = state ? state.targetCommitish : undefined;
            resourceInputs["uploadUrl"] = state ? state.uploadUrl : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["zipballUrl"] = state ? state.zipballUrl : undefined;
        } else {
            const args = argsOrState as ReleaseArgs | undefined;
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            if ((!args || args.tagName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tagName'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["discussionCategoryName"] = args ? args.discussionCategoryName : undefined;
            resourceInputs["draft"] = args ? args.draft : undefined;
            resourceInputs["generateReleaseNotes"] = args ? args.generateReleaseNotes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prerelease"] = args ? args.prerelease : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["tagName"] = args ? args.tagName : undefined;
            resourceInputs["targetCommitish"] = args ? args.targetCommitish : undefined;
            resourceInputs["assetsUrl"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["nodeId"] = undefined /*out*/;
            resourceInputs["publishedAt"] = undefined /*out*/;
            resourceInputs["releaseId"] = undefined /*out*/;
            resourceInputs["tarballUrl"] = undefined /*out*/;
            resourceInputs["uploadUrl"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
            resourceInputs["zipballUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Release.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Release resources.
 */
export interface ReleaseState {
    /**
     * The URL for the release assets.
     */
    assetsUrl?: pulumi.Input<string>;
    /**
     * Text describing the contents of the tag.
     */
    body?: pulumi.Input<string>;
    /**
     * The date and time the release was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * If specified, a discussion of the specified category is created and linked to the release. The value must be a category
     * that already exists in the repository.
     */
    discussionCategoryName?: pulumi.Input<string>;
    /**
     * Set to 'false' to create a published release.
     */
    draft?: pulumi.Input<boolean>;
    etag?: pulumi.Input<string>;
    /**
     * Set to 'true' to automatically generate the name and body for this release. If 'name' is specified, the specified name
     * will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to
     * the automatically generated notes.
     */
    generateReleaseNotes?: pulumi.Input<boolean>;
    /**
     * The HTML URL for the release.
     */
    htmlUrl?: pulumi.Input<string>;
    /**
     * The name of the release.
     */
    name?: pulumi.Input<string>;
    /**
     * The node ID of the release.
     */
    nodeId?: pulumi.Input<string>;
    /**
     * Set to 'false' to identify the release as a full release.
     */
    prerelease?: pulumi.Input<boolean>;
    /**
     * The date and time the release was published.
     */
    publishedAt?: pulumi.Input<string>;
    /**
     * The ID of the release.
     */
    releaseId?: pulumi.Input<number>;
    /**
     * The name of the repository.
     */
    repository?: pulumi.Input<string>;
    /**
     * The name of the tag.
     */
    tagName?: pulumi.Input<string>;
    /**
     * The URL for the tarball of the release.
     */
    tarballUrl?: pulumi.Input<string>;
    /**
     * The branch name or commit SHA the tag is created from.
     */
    targetCommitish?: pulumi.Input<string>;
    /**
     * The URL for the uploaded assets of release.
     */
    uploadUrl?: pulumi.Input<string>;
    /**
     * The URL for the release.
     */
    url?: pulumi.Input<string>;
    /**
     * The URL for the zipball of the release.
     */
    zipballUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Release resource.
 */
export interface ReleaseArgs {
    /**
     * Text describing the contents of the tag.
     */
    body?: pulumi.Input<string>;
    /**
     * If specified, a discussion of the specified category is created and linked to the release. The value must be a category
     * that already exists in the repository.
     */
    discussionCategoryName?: pulumi.Input<string>;
    /**
     * Set to 'false' to create a published release.
     */
    draft?: pulumi.Input<boolean>;
    /**
     * Set to 'true' to automatically generate the name and body for this release. If 'name' is specified, the specified name
     * will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to
     * the automatically generated notes.
     */
    generateReleaseNotes?: pulumi.Input<boolean>;
    /**
     * The name of the release.
     */
    name?: pulumi.Input<string>;
    /**
     * Set to 'false' to identify the release as a full release.
     */
    prerelease?: pulumi.Input<boolean>;
    /**
     * The name of the repository.
     */
    repository: pulumi.Input<string>;
    /**
     * The name of the tag.
     */
    tagName: pulumi.Input<string>;
    /**
     * The branch name or commit SHA the tag is created from.
     */
    targetCommitish?: pulumi.Input<string>;
}
