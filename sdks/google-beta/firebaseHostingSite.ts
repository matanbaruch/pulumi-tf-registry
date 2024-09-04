// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirebaseHostingSite extends pulumi.CustomResource {
    /**
     * Get an existing FirebaseHostingSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirebaseHostingSiteState, opts?: pulumi.CustomResourceOptions): FirebaseHostingSite {
        return new FirebaseHostingSite(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/firebaseHostingSite:FirebaseHostingSite';

    /**
     * Returns true if the given object is an instance of FirebaseHostingSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirebaseHostingSite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirebaseHostingSite.__pulumiType;
    }

    /**
     * Optional. The [ID of a Web
     * App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)
     * associated with the Hosting site.
     */
    public readonly appId!: pulumi.Output<string | undefined>;
    /**
     * The default URL for the site in the form of https://{name}.web.app
     */
    public /*out*/ readonly defaultUrl!: pulumi.Output<string>;
    /**
     * Output only. The fully-qualified resource name of the Hosting site, in the format:
     * projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's
     * ['ProjectNumber'](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)
     * ***(recommended)*** or its
     * ['ProjectId'](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id).
     * Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the
     * Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     */
    public readonly siteId!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.FirebaseHostingSiteTimeouts | undefined>;

    /**
     * Create a FirebaseHostingSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirebaseHostingSiteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirebaseHostingSiteArgs | FirebaseHostingSiteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirebaseHostingSiteState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["defaultUrl"] = state ? state.defaultUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirebaseHostingSiteArgs | undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["defaultUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirebaseHostingSite.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirebaseHostingSite resources.
 */
export interface FirebaseHostingSiteState {
    /**
     * Optional. The [ID of a Web
     * App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)
     * associated with the Hosting site.
     */
    appId?: pulumi.Input<string>;
    /**
     * The default URL for the site in the form of https://{name}.web.app
     */
    defaultUrl?: pulumi.Input<string>;
    /**
     * Output only. The fully-qualified resource name of the Hosting site, in the format:
     * projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's
     * ['ProjectNumber'](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)
     * ***(recommended)*** or its
     * ['ProjectId'](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id).
     * Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the
     * Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     */
    siteId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseHostingSiteTimeouts>;
}

/**
 * The set of arguments for constructing a FirebaseHostingSite resource.
 */
export interface FirebaseHostingSiteArgs {
    /**
     * Optional. The [ID of a Web
     * App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)
     * associated with the Hosting site.
     */
    appId?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the
     * Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     */
    siteId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseHostingSiteTimeouts>;
}
