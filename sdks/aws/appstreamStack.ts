// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppstreamStack extends pulumi.CustomResource {
    /**
     * Get an existing AppstreamStack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppstreamStackState, opts?: pulumi.CustomResourceOptions): AppstreamStack {
        return new AppstreamStack(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/appstreamStack:AppstreamStack';

    /**
     * Returns true if the given object is an instance of AppstreamStack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppstreamStack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppstreamStack.__pulumiType;
    }

    public readonly accessEndpoints!: pulumi.Output<outputs.AppstreamStackAccessEndpoint[] | undefined>;
    public readonly applicationSettings!: pulumi.Output<outputs.AppstreamStackApplicationSettings | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string | undefined>;
    public readonly embedHostDomains!: pulumi.Output<string[]>;
    public readonly feedbackUrl!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly redirectUrl!: pulumi.Output<string>;
    public readonly storageConnectors!: pulumi.Output<outputs.AppstreamStackStorageConnector[] | undefined>;
    public readonly streamingExperienceSettings!: pulumi.Output<outputs.AppstreamStackStreamingExperienceSettings | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly userSettings!: pulumi.Output<outputs.AppstreamStackUserSetting[] | undefined>;

    /**
     * Create a AppstreamStack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AppstreamStackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppstreamStackArgs | AppstreamStackState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppstreamStackState | undefined;
            resourceInputs["accessEndpoints"] = state ? state.accessEndpoints : undefined;
            resourceInputs["applicationSettings"] = state ? state.applicationSettings : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["embedHostDomains"] = state ? state.embedHostDomains : undefined;
            resourceInputs["feedbackUrl"] = state ? state.feedbackUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["redirectUrl"] = state ? state.redirectUrl : undefined;
            resourceInputs["storageConnectors"] = state ? state.storageConnectors : undefined;
            resourceInputs["streamingExperienceSettings"] = state ? state.streamingExperienceSettings : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["userSettings"] = state ? state.userSettings : undefined;
        } else {
            const args = argsOrState as AppstreamStackArgs | undefined;
            resourceInputs["accessEndpoints"] = args ? args.accessEndpoints : undefined;
            resourceInputs["applicationSettings"] = args ? args.applicationSettings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["embedHostDomains"] = args ? args.embedHostDomains : undefined;
            resourceInputs["feedbackUrl"] = args ? args.feedbackUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["redirectUrl"] = args ? args.redirectUrl : undefined;
            resourceInputs["storageConnectors"] = args ? args.storageConnectors : undefined;
            resourceInputs["streamingExperienceSettings"] = args ? args.streamingExperienceSettings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["userSettings"] = args ? args.userSettings : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppstreamStack.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppstreamStack resources.
 */
export interface AppstreamStackState {
    accessEndpoints?: pulumi.Input<pulumi.Input<inputs.AppstreamStackAccessEndpoint>[]>;
    applicationSettings?: pulumi.Input<inputs.AppstreamStackApplicationSettings>;
    arn?: pulumi.Input<string>;
    createdTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    embedHostDomains?: pulumi.Input<pulumi.Input<string>[]>;
    feedbackUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    redirectUrl?: pulumi.Input<string>;
    storageConnectors?: pulumi.Input<pulumi.Input<inputs.AppstreamStackStorageConnector>[]>;
    streamingExperienceSettings?: pulumi.Input<inputs.AppstreamStackStreamingExperienceSettings>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    userSettings?: pulumi.Input<pulumi.Input<inputs.AppstreamStackUserSetting>[]>;
}

/**
 * The set of arguments for constructing a AppstreamStack resource.
 */
export interface AppstreamStackArgs {
    accessEndpoints?: pulumi.Input<pulumi.Input<inputs.AppstreamStackAccessEndpoint>[]>;
    applicationSettings?: pulumi.Input<inputs.AppstreamStackApplicationSettings>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    embedHostDomains?: pulumi.Input<pulumi.Input<string>[]>;
    feedbackUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    redirectUrl?: pulumi.Input<string>;
    storageConnectors?: pulumi.Input<pulumi.Input<inputs.AppstreamStackStorageConnector>[]>;
    streamingExperienceSettings?: pulumi.Input<inputs.AppstreamStackStreamingExperienceSettings>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    userSettings?: pulumi.Input<pulumi.Input<inputs.AppstreamStackUserSetting>[]>;
}
