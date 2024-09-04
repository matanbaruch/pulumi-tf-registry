// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class HypervisorAws extends pulumi.CustomResource {
    /**
     * Get an existing HypervisorAws resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HypervisorAwsState, opts?: pulumi.CustomResourceOptions): HypervisorAws {
        return new HypervisorAws(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'commvault:index/hypervisorAws:HypervisorAws';

    /**
     * Returns true if the given object is an instance of HypervisorAws.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HypervisorAws {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HypervisorAws.__pulumiType;
    }

    /**
     * Access Key of Amazon login
     */
    public readonly accesskey!: pulumi.Output<string>;
    public readonly accessnodes!: pulumi.Output<outputs.HypervisorAwsAccessnode[] | undefined>;
    public readonly activitycontrols!: pulumi.Output<outputs.HypervisorAwsActivitycontrol[] | undefined>;
    public readonly credentials!: pulumi.Output<outputs.HypervisorAwsCredential[] | undefined>;
    /**
     * The name of the hypervisor that has to be changed
     */
    public readonly displayname!: pulumi.Output<string>;
    public readonly enableawsadminaccount!: pulumi.Output<string>;
    /**
     * ETCD Protection options for a cluster
     */
    public readonly etcdprotections!: pulumi.Output<outputs.HypervisorAwsEtcdprotection[] | undefined>;
    public readonly fbrunixmediaagents!: pulumi.Output<outputs.HypervisorAwsFbrunixmediaagent[] | undefined>;
    /**
     * [Amazon]
     */
    public readonly hypervisortype!: pulumi.Output<string>;
    /**
     * The name of the hypervisor group being created
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * AWS region if Iam role is used
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Role ARN for STS assume role with IAM policy
     */
    public readonly rolearn!: pulumi.Output<string>;
    /**
     * secret Key of Amazon login
     */
    public readonly secretkey!: pulumi.Output<string>;
    public readonly securities!: pulumi.Output<outputs.HypervisorAwsSecurity[] | undefined>;
    public readonly settings!: pulumi.Output<outputs.HypervisorAwsSetting[] | undefined>;
    /**
     * if credential validation has to be skipped.
     */
    public readonly skipcredentialvalidation!: pulumi.Output<string>;
    /**
     * if Iam Role is used
     */
    public readonly useiamrole!: pulumi.Output<string>;
    /**
     * Clientname to be used as Admin Account
     */
    public readonly useserviceaccount!: pulumi.Output<string>;

    /**
     * Create a HypervisorAws resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HypervisorAwsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HypervisorAwsArgs | HypervisorAwsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HypervisorAwsState | undefined;
            resourceInputs["accesskey"] = state ? state.accesskey : undefined;
            resourceInputs["accessnodes"] = state ? state.accessnodes : undefined;
            resourceInputs["activitycontrols"] = state ? state.activitycontrols : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["displayname"] = state ? state.displayname : undefined;
            resourceInputs["enableawsadminaccount"] = state ? state.enableawsadminaccount : undefined;
            resourceInputs["etcdprotections"] = state ? state.etcdprotections : undefined;
            resourceInputs["fbrunixmediaagents"] = state ? state.fbrunixmediaagents : undefined;
            resourceInputs["hypervisortype"] = state ? state.hypervisortype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["rolearn"] = state ? state.rolearn : undefined;
            resourceInputs["secretkey"] = state ? state.secretkey : undefined;
            resourceInputs["securities"] = state ? state.securities : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["skipcredentialvalidation"] = state ? state.skipcredentialvalidation : undefined;
            resourceInputs["useiamrole"] = state ? state.useiamrole : undefined;
            resourceInputs["useserviceaccount"] = state ? state.useserviceaccount : undefined;
        } else {
            const args = argsOrState as HypervisorAwsArgs | undefined;
            if ((!args || args.accesskey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accesskey'");
            }
            if ((!args || args.secretkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretkey'");
            }
            if ((!args || args.useiamrole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'useiamrole'");
            }
            resourceInputs["accesskey"] = args ? args.accesskey : undefined;
            resourceInputs["accessnodes"] = args ? args.accessnodes : undefined;
            resourceInputs["activitycontrols"] = args ? args.activitycontrols : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["displayname"] = args ? args.displayname : undefined;
            resourceInputs["enableawsadminaccount"] = args ? args.enableawsadminaccount : undefined;
            resourceInputs["etcdprotections"] = args ? args.etcdprotections : undefined;
            resourceInputs["fbrunixmediaagents"] = args ? args.fbrunixmediaagents : undefined;
            resourceInputs["hypervisortype"] = args ? args.hypervisortype : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["rolearn"] = args ? args.rolearn : undefined;
            resourceInputs["secretkey"] = args ? args.secretkey : undefined;
            resourceInputs["securities"] = args ? args.securities : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["skipcredentialvalidation"] = args ? args.skipcredentialvalidation : undefined;
            resourceInputs["useiamrole"] = args ? args.useiamrole : undefined;
            resourceInputs["useserviceaccount"] = args ? args.useserviceaccount : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HypervisorAws.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HypervisorAws resources.
 */
export interface HypervisorAwsState {
    /**
     * Access Key of Amazon login
     */
    accesskey?: pulumi.Input<string>;
    accessnodes?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsAccessnode>[]>;
    activitycontrols?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsActivitycontrol>[]>;
    credentials?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsCredential>[]>;
    /**
     * The name of the hypervisor that has to be changed
     */
    displayname?: pulumi.Input<string>;
    enableawsadminaccount?: pulumi.Input<string>;
    /**
     * ETCD Protection options for a cluster
     */
    etcdprotections?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsEtcdprotection>[]>;
    fbrunixmediaagents?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsFbrunixmediaagent>[]>;
    /**
     * [Amazon]
     */
    hypervisortype?: pulumi.Input<string>;
    /**
     * The name of the hypervisor group being created
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region if Iam role is used
     */
    region?: pulumi.Input<string>;
    /**
     * Role ARN for STS assume role with IAM policy
     */
    rolearn?: pulumi.Input<string>;
    /**
     * secret Key of Amazon login
     */
    secretkey?: pulumi.Input<string>;
    securities?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsSecurity>[]>;
    settings?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsSetting>[]>;
    /**
     * if credential validation has to be skipped.
     */
    skipcredentialvalidation?: pulumi.Input<string>;
    /**
     * if Iam Role is used
     */
    useiamrole?: pulumi.Input<string>;
    /**
     * Clientname to be used as Admin Account
     */
    useserviceaccount?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HypervisorAws resource.
 */
export interface HypervisorAwsArgs {
    /**
     * Access Key of Amazon login
     */
    accesskey: pulumi.Input<string>;
    accessnodes?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsAccessnode>[]>;
    activitycontrols?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsActivitycontrol>[]>;
    credentials?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsCredential>[]>;
    /**
     * The name of the hypervisor that has to be changed
     */
    displayname?: pulumi.Input<string>;
    enableawsadminaccount?: pulumi.Input<string>;
    /**
     * ETCD Protection options for a cluster
     */
    etcdprotections?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsEtcdprotection>[]>;
    fbrunixmediaagents?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsFbrunixmediaagent>[]>;
    /**
     * [Amazon]
     */
    hypervisortype?: pulumi.Input<string>;
    /**
     * The name of the hypervisor group being created
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region if Iam role is used
     */
    region?: pulumi.Input<string>;
    /**
     * Role ARN for STS assume role with IAM policy
     */
    rolearn?: pulumi.Input<string>;
    /**
     * secret Key of Amazon login
     */
    secretkey: pulumi.Input<string>;
    securities?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsSecurity>[]>;
    settings?: pulumi.Input<pulumi.Input<inputs.HypervisorAwsSetting>[]>;
    /**
     * if credential validation has to be skipped.
     */
    skipcredentialvalidation?: pulumi.Input<string>;
    /**
     * if Iam Role is used
     */
    useiamrole: pulumi.Input<string>;
    /**
     * Clientname to be used as Admin Account
     */
    useserviceaccount?: pulumi.Input<string>;
}
