// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/application:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * The application folder path in which the application should be created.
     */
    public readonly applicationFolderPath!: pulumi.Output<string | undefined>;
    /**
     * The delivery group IDs to which the application should be added.
     */
    public readonly deliveryGroups!: pulumi.Output<string[]>;
    /**
     * Description of the application.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The Id of the icon to be associated with the application.
     */
    public readonly icon!: pulumi.Output<string>;
    /**
     * The install application properties.
     */
    public readonly installedAppProperties!: pulumi.Output<outputs.ApplicationInstalledAppProperties>;
    /**
     * By default, the application is visible to all users within a delivery group. However, you can restrict its visibility to
     * only certain users by specifying them in the `limit_visibility_to_users` list. > **Note** Users must be in
     * `DOMAIN\UserOrGroupName` or `user@domain.com` format
     */
    public readonly limitVisibilityToUsers!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A display name for the application that is shown to users.
     */
    public readonly publishedName!: pulumi.Output<string>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationArgs | ApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationState | undefined;
            resourceInputs["applicationFolderPath"] = state ? state.applicationFolderPath : undefined;
            resourceInputs["deliveryGroups"] = state ? state.deliveryGroups : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["installedAppProperties"] = state ? state.installedAppProperties : undefined;
            resourceInputs["limitVisibilityToUsers"] = state ? state.limitVisibilityToUsers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publishedName"] = state ? state.publishedName : undefined;
        } else {
            const args = argsOrState as ApplicationArgs | undefined;
            if ((!args || args.deliveryGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deliveryGroups'");
            }
            if ((!args || args.installedAppProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'installedAppProperties'");
            }
            if ((!args || args.publishedName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publishedName'");
            }
            resourceInputs["applicationFolderPath"] = args ? args.applicationFolderPath : undefined;
            resourceInputs["deliveryGroups"] = args ? args.deliveryGroups : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["installedAppProperties"] = args ? args.installedAppProperties : undefined;
            resourceInputs["limitVisibilityToUsers"] = args ? args.limitVisibilityToUsers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publishedName"] = args ? args.publishedName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Application.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * The application folder path in which the application should be created.
     */
    applicationFolderPath?: pulumi.Input<string>;
    /**
     * The delivery group IDs to which the application should be added.
     */
    deliveryGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * The Id of the icon to be associated with the application.
     */
    icon?: pulumi.Input<string>;
    /**
     * The install application properties.
     */
    installedAppProperties?: pulumi.Input<inputs.ApplicationInstalledAppProperties>;
    /**
     * By default, the application is visible to all users within a delivery group. However, you can restrict its visibility to
     * only certain users by specifying them in the `limit_visibility_to_users` list. > **Note** Users must be in
     * `DOMAIN\UserOrGroupName` or `user@domain.com` format
     */
    limitVisibilityToUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * A display name for the application that is shown to users.
     */
    publishedName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The application folder path in which the application should be created.
     */
    applicationFolderPath?: pulumi.Input<string>;
    /**
     * The delivery group IDs to which the application should be added.
     */
    deliveryGroups: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * The Id of the icon to be associated with the application.
     */
    icon?: pulumi.Input<string>;
    /**
     * The install application properties.
     */
    installedAppProperties: pulumi.Input<inputs.ApplicationInstalledAppProperties>;
    /**
     * By default, the application is visible to all users within a delivery group. However, you can restrict its visibility to
     * only certain users by specifying them in the `limit_visibility_to_users` list. > **Note** Users must be in
     * `DOMAIN\UserOrGroupName` or `user@domain.com` format
     */
    limitVisibilityToUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * A display name for the application that is shown to users.
     */
    publishedName: pulumi.Input<string>;
}
