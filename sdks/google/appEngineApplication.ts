// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppEngineApplication extends pulumi.CustomResource {
    /**
     * Get an existing AppEngineApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppEngineApplicationState, opts?: pulumi.CustomResourceOptions): AppEngineApplication {
        return new AppEngineApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/appEngineApplication:AppEngineApplication';

    /**
     * Returns true if the given object is an instance of AppEngineApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppEngineApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppEngineApplication.__pulumiType;
    }

    /**
     * Identifier of the app.
     */
    public /*out*/ readonly appId!: pulumi.Output<string>;
    /**
     * The domain to authenticate users with when using App Engine's User API.
     */
    public readonly authDomain!: pulumi.Output<string>;
    /**
     * The GCS bucket code is being stored in for this app.
     */
    public /*out*/ readonly codeBucket!: pulumi.Output<string>;
    public readonly databaseType!: pulumi.Output<string>;
    /**
     * The GCS bucket content is being stored in for this app.
     */
    public /*out*/ readonly defaultBucket!: pulumi.Output<string>;
    /**
     * The default hostname for this app.
     */
    public /*out*/ readonly defaultHostname!: pulumi.Output<string>;
    /**
     * A block of optional settings to configure specific App Engine features:
     */
    public readonly featureSettings!: pulumi.Output<outputs.AppEngineApplicationFeatureSettings | undefined>;
    /**
     * The GCR domain used for storing managed Docker images for this app.
     */
    public /*out*/ readonly gcrDomain!: pulumi.Output<string>;
    /**
     * Settings for enabling Cloud Identity Aware Proxy
     */
    public readonly iap!: pulumi.Output<outputs.AppEngineApplicationIap | undefined>;
    /**
     * The location to serve the app from.
     */
    public readonly locationId!: pulumi.Output<string>;
    /**
     * Unique name of the app.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The project ID to create the application under.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The serving status of the app.
     */
    public readonly servingStatus!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AppEngineApplicationTimeouts | undefined>;
    /**
     * A list of dispatch rule blocks. Each block has a domain, path, and service field.
     */
    public /*out*/ readonly urlDispatchRules!: pulumi.Output<outputs.AppEngineApplicationUrlDispatchRule[]>;

    /**
     * Create a AppEngineApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppEngineApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppEngineApplicationArgs | AppEngineApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppEngineApplicationState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["authDomain"] = state ? state.authDomain : undefined;
            resourceInputs["codeBucket"] = state ? state.codeBucket : undefined;
            resourceInputs["databaseType"] = state ? state.databaseType : undefined;
            resourceInputs["defaultBucket"] = state ? state.defaultBucket : undefined;
            resourceInputs["defaultHostname"] = state ? state.defaultHostname : undefined;
            resourceInputs["featureSettings"] = state ? state.featureSettings : undefined;
            resourceInputs["gcrDomain"] = state ? state.gcrDomain : undefined;
            resourceInputs["iap"] = state ? state.iap : undefined;
            resourceInputs["locationId"] = state ? state.locationId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["servingStatus"] = state ? state.servingStatus : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["urlDispatchRules"] = state ? state.urlDispatchRules : undefined;
        } else {
            const args = argsOrState as AppEngineApplicationArgs | undefined;
            if ((!args || args.locationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locationId'");
            }
            resourceInputs["authDomain"] = args ? args.authDomain : undefined;
            resourceInputs["databaseType"] = args ? args.databaseType : undefined;
            resourceInputs["featureSettings"] = args ? args.featureSettings : undefined;
            resourceInputs["iap"] = args ? args.iap : undefined;
            resourceInputs["locationId"] = args ? args.locationId : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["servingStatus"] = args ? args.servingStatus : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["codeBucket"] = undefined /*out*/;
            resourceInputs["defaultBucket"] = undefined /*out*/;
            resourceInputs["defaultHostname"] = undefined /*out*/;
            resourceInputs["gcrDomain"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["urlDispatchRules"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppEngineApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppEngineApplication resources.
 */
export interface AppEngineApplicationState {
    /**
     * Identifier of the app.
     */
    appId?: pulumi.Input<string>;
    /**
     * The domain to authenticate users with when using App Engine's User API.
     */
    authDomain?: pulumi.Input<string>;
    /**
     * The GCS bucket code is being stored in for this app.
     */
    codeBucket?: pulumi.Input<string>;
    databaseType?: pulumi.Input<string>;
    /**
     * The GCS bucket content is being stored in for this app.
     */
    defaultBucket?: pulumi.Input<string>;
    /**
     * The default hostname for this app.
     */
    defaultHostname?: pulumi.Input<string>;
    /**
     * A block of optional settings to configure specific App Engine features:
     */
    featureSettings?: pulumi.Input<inputs.AppEngineApplicationFeatureSettings>;
    /**
     * The GCR domain used for storing managed Docker images for this app.
     */
    gcrDomain?: pulumi.Input<string>;
    /**
     * Settings for enabling Cloud Identity Aware Proxy
     */
    iap?: pulumi.Input<inputs.AppEngineApplicationIap>;
    /**
     * The location to serve the app from.
     */
    locationId?: pulumi.Input<string>;
    /**
     * Unique name of the app.
     */
    name?: pulumi.Input<string>;
    /**
     * The project ID to create the application under.
     */
    project?: pulumi.Input<string>;
    /**
     * The serving status of the app.
     */
    servingStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AppEngineApplicationTimeouts>;
    /**
     * A list of dispatch rule blocks. Each block has a domain, path, and service field.
     */
    urlDispatchRules?: pulumi.Input<pulumi.Input<inputs.AppEngineApplicationUrlDispatchRule>[]>;
}

/**
 * The set of arguments for constructing a AppEngineApplication resource.
 */
export interface AppEngineApplicationArgs {
    /**
     * The domain to authenticate users with when using App Engine's User API.
     */
    authDomain?: pulumi.Input<string>;
    databaseType?: pulumi.Input<string>;
    /**
     * A block of optional settings to configure specific App Engine features:
     */
    featureSettings?: pulumi.Input<inputs.AppEngineApplicationFeatureSettings>;
    /**
     * Settings for enabling Cloud Identity Aware Proxy
     */
    iap?: pulumi.Input<inputs.AppEngineApplicationIap>;
    /**
     * The location to serve the app from.
     */
    locationId: pulumi.Input<string>;
    /**
     * The project ID to create the application under.
     */
    project?: pulumi.Input<string>;
    /**
     * The serving status of the app.
     */
    servingStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AppEngineApplicationTimeouts>;
}
