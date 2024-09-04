// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemSaml extends pulumi.CustomResource {
    /**
     * Get an existing SystemSaml resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSamlState, opts?: pulumi.CustomResourceOptions): SystemSaml {
        return new SystemSaml(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/systemSaml:SystemSaml';

    /**
     * Returns true if the given object is an instance of SystemSaml.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSaml {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSaml.__pulumiType;
    }

    public readonly acsUrl!: pulumi.Output<string>;
    public readonly authRequestSigned!: pulumi.Output<string>;
    public readonly cert!: pulumi.Output<string | undefined>;
    public readonly defaultProfile!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly entityId!: pulumi.Output<string>;
    public readonly fabricIdps!: pulumi.Output<outputs.SystemSamlFabricIdp[] | undefined>;
    public readonly forticloudSso!: pulumi.Output<string>;
    public readonly idpCert!: pulumi.Output<string | undefined>;
    public readonly idpEntityId!: pulumi.Output<string | undefined>;
    public readonly idpSingleLogoutUrl!: pulumi.Output<string | undefined>;
    public readonly idpSingleSignOnUrl!: pulumi.Output<string | undefined>;
    public readonly loginAutoRedirect!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;
    public readonly serverAddress!: pulumi.Output<string | undefined>;
    public readonly serviceProviders!: pulumi.Output<outputs.SystemSamlServiceProvider[] | undefined>;
    public readonly slsUrl!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly userAutoCreate!: pulumi.Output<string>;
    public readonly wantAssertionsSigned!: pulumi.Output<string>;

    /**
     * Create a SystemSaml resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSamlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSamlArgs | SystemSamlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSamlState | undefined;
            resourceInputs["acsUrl"] = state ? state.acsUrl : undefined;
            resourceInputs["authRequestSigned"] = state ? state.authRequestSigned : undefined;
            resourceInputs["cert"] = state ? state.cert : undefined;
            resourceInputs["defaultProfile"] = state ? state.defaultProfile : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["entityId"] = state ? state.entityId : undefined;
            resourceInputs["fabricIdps"] = state ? state.fabricIdps : undefined;
            resourceInputs["forticloudSso"] = state ? state.forticloudSso : undefined;
            resourceInputs["idpCert"] = state ? state.idpCert : undefined;
            resourceInputs["idpEntityId"] = state ? state.idpEntityId : undefined;
            resourceInputs["idpSingleLogoutUrl"] = state ? state.idpSingleLogoutUrl : undefined;
            resourceInputs["idpSingleSignOnUrl"] = state ? state.idpSingleSignOnUrl : undefined;
            resourceInputs["loginAutoRedirect"] = state ? state.loginAutoRedirect : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["serverAddress"] = state ? state.serverAddress : undefined;
            resourceInputs["serviceProviders"] = state ? state.serviceProviders : undefined;
            resourceInputs["slsUrl"] = state ? state.slsUrl : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["userAutoCreate"] = state ? state.userAutoCreate : undefined;
            resourceInputs["wantAssertionsSigned"] = state ? state.wantAssertionsSigned : undefined;
        } else {
            const args = argsOrState as SystemSamlArgs | undefined;
            resourceInputs["acsUrl"] = args ? args.acsUrl : undefined;
            resourceInputs["authRequestSigned"] = args ? args.authRequestSigned : undefined;
            resourceInputs["cert"] = args ? args.cert : undefined;
            resourceInputs["defaultProfile"] = args ? args.defaultProfile : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["entityId"] = args ? args.entityId : undefined;
            resourceInputs["fabricIdps"] = args ? args.fabricIdps : undefined;
            resourceInputs["forticloudSso"] = args ? args.forticloudSso : undefined;
            resourceInputs["idpCert"] = args ? args.idpCert : undefined;
            resourceInputs["idpEntityId"] = args ? args.idpEntityId : undefined;
            resourceInputs["idpSingleLogoutUrl"] = args ? args.idpSingleLogoutUrl : undefined;
            resourceInputs["idpSingleSignOnUrl"] = args ? args.idpSingleSignOnUrl : undefined;
            resourceInputs["loginAutoRedirect"] = args ? args.loginAutoRedirect : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["serverAddress"] = args ? args.serverAddress : undefined;
            resourceInputs["serviceProviders"] = args ? args.serviceProviders : undefined;
            resourceInputs["slsUrl"] = args ? args.slsUrl : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["userAutoCreate"] = args ? args.userAutoCreate : undefined;
            resourceInputs["wantAssertionsSigned"] = args ? args.wantAssertionsSigned : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSaml.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSaml resources.
 */
export interface SystemSamlState {
    acsUrl?: pulumi.Input<string>;
    authRequestSigned?: pulumi.Input<string>;
    cert?: pulumi.Input<string>;
    defaultProfile?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    entityId?: pulumi.Input<string>;
    fabricIdps?: pulumi.Input<pulumi.Input<inputs.SystemSamlFabricIdp>[]>;
    forticloudSso?: pulumi.Input<string>;
    idpCert?: pulumi.Input<string>;
    idpEntityId?: pulumi.Input<string>;
    idpSingleLogoutUrl?: pulumi.Input<string>;
    idpSingleSignOnUrl?: pulumi.Input<string>;
    loginAutoRedirect?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    serverAddress?: pulumi.Input<string>;
    serviceProviders?: pulumi.Input<pulumi.Input<inputs.SystemSamlServiceProvider>[]>;
    slsUrl?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    userAutoCreate?: pulumi.Input<string>;
    wantAssertionsSigned?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSaml resource.
 */
export interface SystemSamlArgs {
    acsUrl?: pulumi.Input<string>;
    authRequestSigned?: pulumi.Input<string>;
    cert?: pulumi.Input<string>;
    defaultProfile?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    entityId?: pulumi.Input<string>;
    fabricIdps?: pulumi.Input<pulumi.Input<inputs.SystemSamlFabricIdp>[]>;
    forticloudSso?: pulumi.Input<string>;
    idpCert?: pulumi.Input<string>;
    idpEntityId?: pulumi.Input<string>;
    idpSingleLogoutUrl?: pulumi.Input<string>;
    idpSingleSignOnUrl?: pulumi.Input<string>;
    loginAutoRedirect?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    serverAddress?: pulumi.Input<string>;
    serviceProviders?: pulumi.Input<pulumi.Input<inputs.SystemSamlServiceProvider>[]>;
    slsUrl?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    userAutoCreate?: pulumi.Input<string>;
    wantAssertionsSigned?: pulumi.Input<string>;
}
